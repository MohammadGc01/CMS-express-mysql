let logs = [];
let categorys = [];
let sub_category = [];
let all_log_count = 0;
let images = [];
let roles = [];


  var cms_name = null
  var cms_logo = null
 var  cms_mailler_service = null
 var  cms_mailler_user = null
 var  cms_mailler_pass = null
var ShowAds = null;
 
async function loadSettingElement() {
    cms_name = document.getElementById("cms_name");
    cms_logo = document.getElementById("cms_logo");
    cms_mailler_service = document.getElementById("cms_mailler_service");
    cms_mailler_user = document.getElementById("cms_mailler_user");
    cms_mailler_pass = document.getElementById("cms_mailler_pass");
    ShowAds = document.getElementById("ShowAds");
}

async function get_site_setting() {
  const response = await fetch("/get/site/setting", {
    method : "GET",
  });
  const result = await response.json()

  cms_name.value = result.result[0].cms_name;
    
  cms_logo.value = result.result[0].cms_logo;

  cms_mailler_service.value = result.result[0].cms_mailler_service;
  
  cms_mailler_user.value = result.result[0].cms_mailler_user;

  cms_mailler_pass.value = result.result[0].cms_mailler_pass;
  ShowAds.value = result.result[0].ShowAds;

}

async function delete_role(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`/user/role/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const data = await res.json();
        Swal.fire({
          title: "Deleted!",
          text: data.message,
          icon: "success",
        });
        get_roles();
      }
    }
  });
}

async function get_roles() {
  const res = await fetch("/user/role/get/all");
  const data = await res.json();
  roles = data;
  const table = document.getElementById("table");
  table.innerHTML = `
                <tr>
                    <th class="col">ID</th>
                    <th class="col">نام نقش</th>
                    <th class="col">تاریخ ساخت</th>
                    <th class="col">عملیات</th>
                            <th class="col btn btn-outline-primary" onclick="get_roles()">refresh</th>
                </tr>
            `;
  roles.forEach((role) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${role.id}</td>
                    <td>${role.name}</td>
                    <td>${formatDate(role.create_time)}</td>
                    <td>
                      <a href="/user/role/edit/${
                        role.id
                      }">  <button class="btn btn-warning">ویرایش</button></a>
                        <button onclick="delete_role(${
                          role.id
                        })" class="btn btn-danger">حذف</button>
                    </td>
                `;
    table.appendChild(row);
  });
}

async function create_role() {
  const role_name = document.getElementById("role_name").value;
  const res = await fetch("/user/role/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: role_name }),
  });
  const data = await res.json();
  if (res.ok) {
    get_roles();
  }
}

async function delete_post(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`/post/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const data = await res.json();
        Swal.fire({
          title: "Deleted!",
          text: data,
          icon: "success",
        });
      }
    }
  });
}

async function get_posts() {
  const res = await fetch("/post/get/all");
  const posts = await res.json();
  const post_result = document.getElementById("post_result");

  posts.forEach((post) => {
    const time = formatDate(post.create_time);
    const div = document.createElement("div");
    div.classList.add("card-post");

    div.innerHTML = `
      <img src="/images/${post.img_path}" alt="${post.title}">
      <h4>${post.title}</h4>
      <p>${post.description}</p>
      <span>${post.views} بازدید</span>
      <a href="/post/edit/${post.id}" class="edit_post"><i class="bi bi-pencil-fill"></i> ویرایش</a>
      <hr>
    <button onclick="delete_post(${post.id})">حذف</button>

      <a href="#">ادامه مطالب</a>
    `;
    post_result.appendChild(div);
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function create_post() {
  document
    .getElementById("form_create_post")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

      // جمع‌آوری داده‌های فرم
      const formData = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        more_description: document.getElementById("more_description").value,
        category_id: parseInt(document.getElementById("category_id").value),
        sub_category_id: parseInt(
          document.getElementById("sub_category_id").value
        ),
        img_path: document.getElementById("img_path").value,
      };

      // ارسال داده‌ها با fetch به API
      fetch("/post/create", {
        // آدرس API خود را جایگزین کنید
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("خطا در ارسال دیتا");
          }
          return response.json();
        })
        .then((data) => {
          // عملیات بعد از موفقیت
          alert(data);
          console.log(data);
          // در صورت نیاز، فرم را ریست کنید
          document.getElementById("form_create_post").reset();
        })
        .catch((error) => {
          alert("خطا: " + error.message);
          console.error("Error:", error);
        });
    });
}

async function bindForm() {
  document
    .getElementById("Update_img_form")
    .addEventListener("submit", async (event) => {
      const img = document.getElementById("file_img");
      const formData = new FormData();
      formData.append("myfile", img.files[0]);

      event.preventDefault();
      const result = await fetch("/upload/images", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();
      console.log(data);
    });

  const result = await fetch("/get/images", {
    method: "GET",
  });

  const images_div = document.getElementById("images");

  images = await result.json();
  images.forEach((img) => {
    const div = document.createElement("div");
    div.classList.add("col-3");

    div.innerHTML = `
                         
                     <img src="/images/${img.name}">

                      <h3 class="text-dark">${img.name}</h3>
                      
                <button onclick="delete_img('${img.name}')">حذف</button>

                     `;

    images_div.appendChild(div);
  });
}

async function delete_img(name) {
  const result = await fetch(`/image/delete/${name}`, {
    method: "DELETE",
  });

  const data = await result.json();
  alert(data);
  bindForm();
}

function add_cat() {
  document
    .getElementById("add_cat")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("input_cat_name").value;

      const result = await fetch("/post/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await result.json();
      alert(data);
      get_category();
    });
}

function add_sub_cat() {
  document
    .getElementById("add_sub_cat")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("input_sub_cat_name").value;
      const category_id = document.getElementById("select_sub_category").value;

      const result = await fetch("/post/sub/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, category_id }),
      });
      const data = await result.json();
      alert(data);
      get_category();
    });
}

async function delete_category(IsSub, id) {
  var url = ``;
  if (IsSub) url = `/post/delete/sub_category/${id}`;
  if (!IsSub) url = `/post/delete/category/${id}`;
  const response = await fetch(url, {
   method : "POST"
  });

  const result = await response.json()
  alert(result)
}

async function get_category() {
  categorys = [];
  const result = await fetch("/post/get/categorys", {
    method: "GET",
  });
  categorys = await result.json();

  const table = document.getElementById("table");
  const select_sub_category = document.getElementById("select_sub_category");

  table.innerHTML = `  <tr>
                            <th class="col">ID</th>
                            <th class="col">نام دسته بندی</th>
                            <th class="col">تاریخ ساخت</th>
                            <th><button onclick="get_category()" class="p-1"><i class="bi bi-arrow-clockwise"></i></button></th>
                        </tr>`;
  select_sub_category.innerHTML = "";
  categorys.forEach((category) => {
    const tr = document.createElement("tr");
    tr.classList.add("text-dark");

    tr.innerHTML = `

                 <th scope="row">${category.id}</th>
      <td>${category.name}</td>
      <td>${category.create_time}</td>
      <td><button type="submit" class="btn btn-outline-danger my-4" onclick="delete_category(false , ${category.id})">حذف</button></td>


      `;
    table.appendChild(tr);

    const option = document.createElement("option");
    option.value = category.id;
    option.innerText = category.name;

    select_sub_category.appendChild(option);
  });
}

async function get_sub_category() {
  sub_category = [];
  const result = await fetch("/post/get/sub/categorys", {
    method: "GET",
  });
  sub_category = await result.json();

  const table = document.getElementById("table2");
  table.innerHTML = `  <tr>
                            <th class="col">ID</th>
                            <th class="col">نام زیر دسته بندی</th>
                            <th class="col">تاریخ ساخت</th>
                            <th class="col"> ایدی دسته بندی اصلی</th>
                            <th><button onclick="get_sub_category()" class="p-1"><i
                                        class="bi bi-arrow-clockwise"></i></button></th>
                        </tr>`;
  sub_category.forEach((category) => {
    const tr = document.createElement("tr");
    tr.classList.add("text-dark");

    tr.innerHTML = `

                 <th scope="row">${category.id}</th>
      <td>${category.name}</td>
      <td>${category.create_time}</td>
      <td>${category.category_id}</td>
      <td><button type="submit" class="btn btn-outline-danger my-4" onclick="delete_category(true , ${category.id})">حذف</button></td>


      `;
    table.appendChild(tr);
  });
}
function selectSec(sectionid) {
  const template = document.getElementById(sectionid);
  document.getElementById("MainContent").innerHTML = template.innerHTML;

  if (sectionid === "category_template") {
    add_cat();
    add_sub_cat();
  }

  if (sectionid === "Images_template") {
    bindForm();
  }

  if (sectionid === "post_template") {
    create_post();
    get_posts();
  }
  if (sectionid === "users_template") {
    get_users();
  }

}
async function get_logs() {
  logs = [];
  all_log_count = document.getElementById("all_log_count");
  const result = await fetch("/log/get", {
    method: "GET",
  });
  const log_results_row = document.getElementById("log_results_row");
  log_results_row.innerHTML = ""; // پاک‌سازی لاگ‌های قبلی

  logs = await result.json();
  logs.forEach((log) => {
    const div = document.createElement("div");
    div.classList.add(
      "col-4",
      "p-2",
      "m-1",
      "rounded-3",
      "log_card",
      `${log.level}_back`
    );

    div.innerHTML = `
            <h6>موضوع : ${log.title} </h6>
            <p>متن : ${log.message} </p>
            <h6>ایپی : ${log.ip}</h6>
            <h6>تاریخ : ${log.time}</h6>
            <button onclick="delete_log(${log.id})"> <i class="bi bi-trash text-danger"></i> </button>
        `;
    log_results_row.appendChild(div);
  });

  all_log_count.innerHTML = `تعداد کلی لاگ ها : ${logs.length}`;
}
function filter_log(type) {
  const allLogs = document.querySelectorAll(".log_card");
  allLogs.forEach((log) => {
    if (type === "all") {
      log.style.display = "block";
    } else {
      if (log.classList.contains(`${type}_back`)) {
        log.style.display = "block";
      } else {
        log.style.display = "none";
      }
    }
  });
}

async function delete_log(id) {
  const result = await fetch(`/log/delete/${id}`, {
    method: "POST",
  });

  const data = await result.json();
  alert(data);
}

async function get_users() {
  const result = await fetch(`/user/get/all`, {
    method: "GET",
  });

  const users = await result.json();

  const users_tb = document.getElementById("users_tb");
  users_tb.innerHTML = ``;

  users.result .forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
     <td><img src="/images/${user.email}" width="60" height="60" class="rounded-5"></td>
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td><a class="btn btn-outline-warning" href="/user/get/${user.id}"> ویرایش</a></td>

    `;
    users_tb.appendChild(tr);
  });
}
