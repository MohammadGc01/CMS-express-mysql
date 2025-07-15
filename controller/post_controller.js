const db = require("../database/connection")

async function get_categorys(req , res) {
    const sql = "SELECT * FROM category"
    db.query(sql, (err , result) => {
        if(err) return res.json(err)
            res.json(result)
    })
}



module.exports = {
    get_categorys,
}