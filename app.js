const express = require('express');
const session = require('express-session')
require('dotenv').config();
const app = express()
const body_parser = require('body-parser')
const user_api = require('./routes/user')
const post_api = require('./routes/post')
const index_api = require('./routes/index')
const contact_api = require('./routes/contact')
const path = require('path')
const fs = require('fs');
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // حتماً در پروتکل https: true بشه
  }
}));


app.use('/', index_api)
app.use('/user', user_api)
app.use('/post', post_api)
app.use('/contactus', contact_api)
app.use((req, res) => {
    res.send("404")
})
app.listen(3000, () => {
    console.log("app start http://localhost:3000/");
})