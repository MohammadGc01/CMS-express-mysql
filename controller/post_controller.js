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


module.exports = {
    get_categorys,
    add_category,
    get_sub_categorys,
    add_sub_category,
}