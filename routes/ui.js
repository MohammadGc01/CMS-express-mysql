const router = require("express").Router();

router.get('/', (req ,res) => {
    res.send("سایت هنوز درحال ساخته")
})

module.exports = router