const db = require("../database/connection");
const path = require('path')
const fs = require('fs');

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

function get_logs(req , res) {
    const sql = "SELECT * FROM logs"
    db.query(sql, (err, result) => {
        if (err) {
            console.log("get log from db have error => " + err.message)
            return
        }
        res.json(result)
    })
}

function delete_log(req , res) {
    const id = req.params.id
    if(!id) return res.json({message : "ایدی را وارد نکردید"})
        db.query("DELETE FROM logs WHERE id = ?", id , (err , result) => {
    
            if(err) return res.json(err)
                res.json('لاگ مورد نظر پاک شد')

        })
}


function download_log(req, res) {
     db.query("SELECT * FROM logs", (err, result) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).send("خطا در دریافت اطلاعات");
    }

    const json = JSON.stringify(result, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="logs.json"');
    res.send(json);
  });
}




module.exports = {
save_to_database,
get_logs,
delete_log,
download_log
}