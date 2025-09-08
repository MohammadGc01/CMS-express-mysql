const db = require("../database/connection");
const path = require('path')
const fs = require('fs');
const database = require("../database/database");

function save_to_database(title,message, level , ip) {
 const time = new Date().getTime()
    const persianDateTime = new Intl.DateTimeFormat('fa-IR', {
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(time);

    const sql = "INSERT INTO logs(title, message,level,ip,time) VALUES (?,?,?,?,?)"
    db.query(sql, [title , message, level , ip , persianDateTime ],(err,result)=> {
        if(err) return console.log("save log in db have error =>" + " " + err.message);
        console.log("save log in db success =>" + " " + result.message);
    })
}

async function get_logs(req , res) {
    const db = new database("logs", "*", false, false, false)
    const data = await db.SELECT()
    if (data.success == false) return console.log(data.error.message);
    res.json(data.result)
}

function delete_log(req , res) {
    const id = req.params.id
    if(!id) return res.json({message : "ایدی را وارد نکردید"})
        db.query("DELETE FROM logs WHERE id = ?", id , (err , result) => {
    
            if(err) return res.json(err)
                res.json('لاگ مورد نظر پاک شد')

        })
}


async function download_log(req, res) {
    const db = new database("logs", "*", false, false, false)
    const result = await db.SELECT()
    if (result.success == false) return console.log(result.error.message);

    const json = JSON.stringify(result, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="logs.json"');
    res.send(json);
}




module.exports = {
save_to_database,
get_logs,
delete_log,
download_log
}