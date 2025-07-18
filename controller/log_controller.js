const db = require("../database/connection");

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

function get_logs_search(req , res) {
    const {search , level , feild} = req.params
    const sql = `SELECT * FROM logs WHERE level = ? AND ${feild} LIKE ? `
    db.query(sql, [level , `%${search}%`], (err, result) => {
        if (err) {
            console.log("get log from db have error => " + err.message)
            return
        }
        console.log(result);
        
        res.json(result)
    })
}




module.exports = {
save_to_database,
get_logs,
get_logs_search
}