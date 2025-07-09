const express = require('express');
const app = express()
const body_parser = require('body-parser')

const ui = require('./routes/ui')

app.set('views', __dirname + '/views')
app.set('view engine','ejs')
app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())
app.use(express.static('public'))

app.use('/',ui)

app.use((req ,res) => {
    res.send("404")
})
app.listen(3000 , ()=> {
    console.log("app start port 3000");
})