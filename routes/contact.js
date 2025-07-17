const { create_contact } = require("../controller/contact_controller");

const router = require("express").Router();


router.get('/', (req , res) => {
   res.render('contactus')
})

router.post('/create', async (req , res) => {
   await  create_contact(req , res)
})

module.exports = router