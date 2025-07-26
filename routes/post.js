const { get_categorys, add_category, get_sub_categorys,
   add_sub_category, delete_category, delete_sub_category,
    CREATE_POST, get_all_post } = require("../controller/post_controller");
const { authentication, authorization } = require("../middleware/auth");
const Permissions = require("../constants/Permission");
const { checkPermission } = require("../middleware/checkPermission");

const router = require("express").Router();

router.get('/get/categorys', get_categorys)
router.post('/category/add', authentication, async (req , res) => {
      const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.ADD_CATEGORY);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  add_category(req , res)
})
router.post('/delete/category/:id' , authentication, async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.DELETE_CATEGORY);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  delete_category(req , res)
  
})
router.get('/get/sub/categorys', get_sub_categorys)
router.post('/sub/category/add', authentication, async (req , res) => {
      const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.ADD_SUB_CATEGORY);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  add_sub_category(req , res)
})

router.post('/delete/sub_category/:id' , authentication, async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.DELETE_SUB_CATEGORY);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  delete_sub_category(req , res)
  
})



router.post('/create', authentication, async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.CREATE_POST);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  CREATE_POST(req , res)
})

router.get('/get/all',   get_all_post)

module.exports = router