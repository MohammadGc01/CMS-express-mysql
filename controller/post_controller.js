const db = require("../database/connection")

async function get_categorys(req , res) {
    const sql = "SELECT * FROM category"
    db.query(sql, (err , result) => {
        if(err) return res.json(err)
            res.json(result)
    })
}

async function add_category(req , res){
    const {name} = req.body
    if(!name) return res.json('شما اسمی وارد نکردید')
      const sql = "INSERT INTO category(name) VALUES(?)"
    db.query(sql, name , (err , result) => {
        if(err) return res.json(err)
            res.json('دسته بندی جدید اضافه شد')
    })
}


async function get_sub_categorys(req , res) {
    const sql = "SELECT * FROM sub_category"
    db.query(sql, (err , result) => {
        if(err) return res.json(err)
            res.json(result)
    })
}

async function add_sub_category(req , res){
    const {name , category_id} = req.body
    if(!name) return res.json('شما اسمی وارد نکردید')
      const sql = "INSERT INTO sub_category(name , category_id ) VALUES(?,?)"
    db.query(sql, [name , category_id] , (err , result) => {
        if(err) return res.json(err)
            res.json('زیر مجموعه دسته بندی اضافه شد')
    })
}

async function delete_category(req, res) {
 const { id } = req.params;
 const sql = "DELETE FROM category WHERE id = ?";
 db.query(sql, id, (err, result) => {
    if (err) return res.json(err);
    res.json('دسته بندی حذف شد')
    })
}

async function delete_sub_category(req ,res) {
    const {id} = req.body
    const sql = "DELETE FROM sub_category WHERE id = ?";
    db.query(sql, id, (err, result) => {
    if (err) return res.json(err);
    res.json('دسته بندی حذف شد')
    })
}


async function CREATE_POST(req , res) {
    const {title , description , more_description , category_id , sub_category_id, img_path}  = req.body 
    if(!title || !description || !more_description || !category_id || !sub_category_id || !img_path) return res.json("شما هیچ  اطلاعاتی وارد نکردید")
        const sql = "INSERT INTO posts(title , description , more_description , category_id , sub_category_id , img_path) VALUES(?,?,?,?,?,?)"
    db.query(sql, [title , description , more_description , category_id , sub_category_id , img_path], async (err , result) => {
      if(err){

        return res.json(`موقع ثبت query مشکلی به وجود امد پیام خطا : ${err.message}`)
      }  

      res.json('پست شما با موفقیت ایجاد شد')
    })
}

async function get_all_post(req ,res) {
    db.query("SELECT * FROM posts", (err ,result) => {
        if(err) return res.json(err)
            res.json(result)
    })
}

module.exports = {
    get_categorys,
    add_category,
    get_sub_categorys,
    add_sub_category,
    delete_category,
    delete_sub_category,
    CREATE_POST,
    get_all_post,
}