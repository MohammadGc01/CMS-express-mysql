const db = require("../database/connection");

function save_to_database(loglevel,message) {
    const sql = "INSERT INTO logs(loglevel,logmessage) VALUES(?,?)"
    db.query(sql, [loglevel,message],(err,result)=> {
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
    //   res.render('partials/logs', {logs : result})
    })
}




module.exports = {
save_to_database,
get_logs
}