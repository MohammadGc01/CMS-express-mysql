const router = require("express").Router();
const path = require('path')
const fs = require('fs');
const { get_logs } = require("../controller/log_controller");

router.get('/', (req , res) => {
    res.render('home')
})



router.get('/images/:name', (req , res) => {
   const image_path = path.resolve(__dirname , '../public/images')
   const images = fs.readdirSync(image_path)
   const result = images.find(file => file.startsWith(req.params.name + "."))
    const full_path = path.resolve(`public/images/${result}`) 
    res.sendFile(full_path)
})

router.get('/logs', (req , res) => {
    get_logs(req ,res)
})

module.exports = router