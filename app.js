const express = require('express');
const session = require('express-session')
require('dotenv').config();
const app = express()
const body_parser = require('body-parser')
const user_api = require('./routes/user')


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.get('/', (req , res) => {
    res.render('home')
})
app.use('/user', user_api)

app.use((req, res) => {
    res.send("404")
})
app.listen(3000, () => {
    console.log("app start http://localhost:3000/");
})