const db = require("../database/connection");
const bcrypt = require("bcrypt");
const logger = require("../services/logger");
const mailler = require("../services/mailler");
const database = require("../database/database");
require("dotenv").config();

async function RegisterUser(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    const log = new logger(
      "ثبت نام ناموفق",
      `یوزری درخواست ثبت نام به سرور فرستاد اما هیچ بدنه ای نداشت`,
      "warn",
      req.ip
    );
    await log.save();
    return res.status(400).json({
      success: false,
      message: "لطفاً نام کاربری، ایمیل و رمز عبور را وارد کنید",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users(username, email, password) VALUES (?, ?, ?)`;

  db.query(sql, [username, email, hashPassword], async (err, result) => {
    if (err) {
      const log = new logger(
        `ثبت نام ناموفق :  ${err.name} `,
        `موقع query زدن برای ثبت نام مشکلی به وجود اومد پیام خطا : ${err.message}`,
        "error",
        req.ip
      );
      await log.save();
      return res.status(500).send("ثبت‌ نام با مشکل مواجه شد");
    }

    const DataBase = new database("roles", "*", "set_defualt_role", 1, false);
    const role_id = await DataBase.SELECT();

    const user_id = result.insertId;

    const sql2 = `INSERT INTO user_role(user_id, role_id) VALUES (?, ?)`;
    const role_insert_result = await new Promise((resolve, reject) => {
      db.query(sql2, [user_id, role_id.result[0].id], (insertErr, insertResult) => {
        if (insertErr) return reject(insertErr);
        resolve(insertResult);
      });
    });

    const log = new logger(
      "ثبت نام",
      `کاربری با ایمیل : ${email} و نام کاربری :  ${username} ثبت نام کرد`,
      "success",
      req.ip
    );
    await log.save();

    const mail = new mailler(email, `ثبت نام`, `ثبت نام شما موفقیت انجام شد`);
    await mail.send();

    res.json({
      success: true,
      message: "ثبت‌نام با موفقیت انجام شد",
    });
  });
}

async function LoginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    const log = new logger(
      " ورود ناموفق",
      `یوزری درخواست ورود به سرور فرستاد اما هیچ بدنه ای نداشت`,
      "warn",
      req.ip
    );
    await log.save();
    return res.json("لطفاً نام کاربری، ایمیل و رمز عبور را وارد کنید");
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, email, async (err, result) => {
    if (err) {
      const log = new logger(
        `ورود  ناموفق :  ${err.name} `,
        `موقع query زدن برای  ورود مشکلی به وجود اومد پیام خطا : ${err.message}`,
        "error",
        req.ip
      );

      await log.save();
      return res.status(500).send("ورود شما با مشکل مواجه شد");
    }

    if (result.length === 0) {
      const log = new logger(
        "ورود ناموفق",
        `یوزری درخواست ورود ثبت کرد ولی حسابی با این ${email} ایمیل در دیتا بیس نبود`,
        "info",
        req.ip
      );
      await log.save();
      res.status(404).json({
        success: false,
        message: "کاربری با این ایمیل یافت نشد",
      });
      return;
    }

    const user = result[0];
    const hashPassword = await bcrypt.compare(password, user.password);
    if (!hashPassword) {
      const log = new logger(
        "ورود کاربر",
        `کاربر با ایمیل ${email} درخواست ورود انجام فرستاد اما پسوردش اشتباه بود`,
        "info",
        req.ip
      );
      await log.save();
      res.json({
        message: "پسورد نادرست است دوباره امتحان کنید",
      });
      return;
    }

    const roles = await get_user_role(user);

    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: roles,
    };

    var hour = 3600000;
    req.session.cookie.expires = new Date(Date.now() + hour);
    req.session.cookie.maxAge = hour;

    const log = new logger(
      "ورود موفق",
      `ورود موفق کاربر ${user.username}`,
      "success",
      req.ip
    );
    await log.save();

    const time = new Date().getTime();
    const persianDateTime = new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "full",
      timeStyle: "medium",
    }).format(time);

    const mail = new mailler(
      user.email,
      "ورود موفقیت آمیز",
      `ورود شما موفقیت امیز بود  زمن ورود : ${persianDateTime}`
    );
    await mail.send();
    res.json({
      success: true,
      message: "ورود با موفقیت انجام شد",
    });
  });
}

async function createRole(req, res) {
  const { name } = req.body;
  const sql = "INSERT INTO roles(name) VALUES (?)";
  db.query(sql, [name], async (err, result) => {
    if (err) {
      const log = new logger(
        "ایجاد نقش",
        `خطا در هنگام ایجاد نقش: ${err.message}`,
        "error",
        req.ip
      );
      await log.save();
      return res.json({
        message: "خطایی در هنگام ایجاد نقش رخ داد",
        status: 500,
      });
    }

    const log = new logger(
      "ایجاد نقش",
      `نقش جدید با نام ${name} ایجاد شد`,
      "success",
      req.ip
    );
    await log.save();

    res.json({
      success: true,
      message: "نقش با موفقیت ایجاد شد",
    });
  });
}

async function deleteRole(req, res) {
  const id = req.params.role_id;
  if (!id) return res.json({ message: "شما پارامتر ایدی را وارد نکردید" });

  db.query("DELETE FROM roles WHERE id = ?", [id], async (err, result) => {
    if (err) {
      return res.json({
        message: "موقع حذف رول مشکلی به وجود امد دوباره امتحان کنید",
      });
    }
    const remove_role = await removeRole("role_id", id);
    res.json(`
      رول با موفقیت حذف شد و
      از کاربران 
      گرفته شد
      متن خوده سیستم : ${removeRole}
      `);
  });
}

async function get_user_role(user) {
  const roleRow = await new Promise((resolve, reject) => {
    db.query(
      "SELECT role_id FROM user_role WHERE user_id = ?",
      [user.id],
      (err, result) => {
        if (err) return reject(err);
        if (!result.length) return resolve([]);
        resolve(result);
      }
    );
  });

  const roleid = roleRow.map((role) => role.role_id);
  const placeholders = roleid.map(() => "?").join(",");
  const roleData = await new Promise((resolve, reject) => {
    db.query(
      `SELECT DISTINCT id, name FROM roles WHERE id IN (${placeholders})`,
      roleid,
      (err, result) => {
        if (err) return reject(err);
        if (!result.length) return resolve([]);
        resolve(result);
      }
    );
  });

  return roleData;
}

async function addRole(req, res) {
  const { user_id, role_id } = req.body;
  if (!user_id || !role_id) {
    return res.json({
      success: false,
      message: "لطفا تمام فیلد ها را پر کنید",
    });
  }

  // بررسی تکراری بودن
  const checkSql = "SELECT * FROM user_role WHERE user_id = ? AND role_id = ?";
  db.query(checkSql, [user_id, role_id], (err, result) => {
    if (err) {
      return res.json({
        success: false,
        message: "خطایی رخ داده است",
      });
    }
    if (result.length > 0) {
      return res.json({
        success: false,
        message: "این کاربر قبلاً این نقش را دارد",
      });
    }

    // اضافه کردن نقش
    const sql = "INSERT INTO user_role(user_id, role_id) VALUES (?, ?)";
    db.query(sql, [user_id, role_id], (err2, result2) => {
      if (err2) {
        return res.json({
          success: false,
          message: "خطایی رخ داده است",
        });
      }
      if (result2.affectedRows === 0) {
        return res.json({
          success: false,
          message: "نقش اضافه نشد",
        });
      }
      res.json({
        success: true,
        message: "نقش با موفقیت اضافه شد",
      });
    });
  });
}

async function removeRole(fieldname, value) {
  if (!fieldname) {
    return res.json("فیلد انتخابی را وارد نکردید");
  }
  if (!value) {
    return res.json("مقدار انتخابی را وارد نکردید");
  }
  return new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM user_role WHERE ${fieldname} = ?`,
      value,
      async (err, result) => {
        if (err) return reject(err);
        return resolve("ROLE REMOVE SUCCESSFULL");
      }
    );
  });
}

async function getPrmission(roles) {
  if (!Array.isArray(roles)) {
    return false;
  }
  const roleIds = roles.map((role) => role.id);
  const placeholders = roleIds.map(() => "?").join(",");

  const rows = await new Promise((resolve, reject) => {
    db.query(
      `
        SELECT DISTINCT permission_name
        FROM role_permission
        WHERE role_id IN (${placeholders})
      `,
      roleIds,
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });

  return rows;
}

async function get_role_all(req, res) {
  db.query("SELECT * FROM roles", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
}

async function getRoleById(user_id) {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM roles WHERE id = ?", [user_id], (err, result) => {
      if (err) return reject(err);

      resolve(result[0]);
    });
  });
}

async function getPermissionsByRoleId(role_id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM role_permission WHERE role_id = ?",
      [role_id],
      (err, result) => {
        if (err) return reject(err);

        resolve(result);
      }
    );
  });
}

async function updaterole(req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const set_defualt_role = req.body.set_defualt_role;

  if (!id) {
    return res.json("پارامتر ایدی را وارد نکردید");
  }
  const sql = `UPDATE roles SET name=? , set_defualt_role=?  WHERE id=?`;
  db.query(sql, [name, set_defualt_role, id], (err, result) => {
    if (err) return res.json(err.message);
    res.json("نقش اپدیت شد");
  });
}

async function add_perm_role(req, res) {
  const { permname, role_id } = req.body;
  if (!permname) return res.json("اسم پرمیشن وارد نکردید");
  if (!role_id) return res.json("ایدی رول رو وارد کنید");
  db.query(
    "INSERT INTO role_permission(role_id, permission_name) VALUES(?,?)",
    [role_id, permname],
    (err, result) => {
      if (err) return res.json(err.message);
      res.json("پرمیشن مورد نظر برای این رول ادد شد");
    }
  );
}

async function forgot_pass(req, res) {
  const { email } = req.body;
  if (!email) return res.json("ایمیلی وارد نکردید");

  const CheckEmail = await new Promise((resolve, reject) => {
    db.query(
      "SELECT email FROM users WHERE email = ?",
      email,
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });

  if (!CheckEmail[0]) {
    return res.json("حساب کاربری با این ایمیل پیدا نشد");
  } else {
    const token = await bcrypt.hash(email, 10);
    const sql =
      "INSERT INTO forgot_pass_token(ForEmail , token , IsUsed) VALUES(?,?)";
    db.query(sql, [email, token, "false"], async (err, result) => {
      if (err) return res.json(`مشکلی پیش اومد دوباره امتحان کنید`);
      const Mailler = new mailler(
        email,
        "فراموشی رمز عبور",
        `درود کاربر عزیز برای تغییر رمز عبور حساب خود روی لینک زیر کیلیک کنید
        <a href="http://localhost:3000/user/change-pass/${token}"> کلیک کنید </a>
      `
      );
      await Mailler.send();
      res.status(200).json("لینک عوض کردن رمز عبور برای شما ارسال شد");
    });
  }
}

async function change_pass(req, res) {
  const { token } = req.params;
  const { new_password } = req.body;

  if (!token) return res.json("توکن را وارد نکردید");
  if (!new_password) return res.json("پسورد جدید را وارد نکردید");

  const tokenData = await new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM forgot_pass_token WHERE token = ? AND IsUsed = 'false'",
      [token],
      (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      }
    );
  });

  if (!tokenData) {
    return res.json("توکن نامعتبر یا منقضی شده است");
  } else if (tokenData.IsUsed === "true") {
    return res.json("این توکن قبلا استفاده شده است یکبار دیگر درخواست دهید");
  } else {
    const hashedPassword = await bcrypt.hash(new_password, 10);
    db.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, tokenData.ForEmail],
      (err, result) => {
        if (err) return res.json(err);
        res.json(result);
      }
    );
  }
}

module.exports = {
  RegisterUser,
  LoginUser,
  get_user_role,
  createRole,
  deleteRole,
  addRole,
  removeRole,
  getPrmission,
  get_role_all,
  getRoleById,
  getPermissionsByRoleId,
  updaterole,
  add_perm_role,
  forgot_pass,
  change_pass,
};
