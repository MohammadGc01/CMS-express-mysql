const { get_categorys } = require("../controller/post_controller");

const router = require("express").Router();


router.get('/get/categorys', get_categorys)

module.exports = router