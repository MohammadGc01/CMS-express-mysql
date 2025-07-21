const { get_categorys, add_category, get_sub_categorys, add_sub_category, delete_category, delete_sub_category, CREATE_POST } = require("../controller/post_controller");
const { authentication, authorization } = require("../middleware/auth");
const Permissions = require("../constants/Permission");
const { checkPermission } = require("../middleware/checkPermission");

const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
     
    const rawname = req.body.img_path;

    // پاک‌سازی ایمیل برای استفاده در نام فایل

    // گرفتن پسوند فایل اصلی
    const ext = path.extname(file.originalname);

    // تنظیم نام فایل نهایی
    const finalName = `${rawname}${ext}`;
    const filePath = path.join('public/images/', finalName);
    if(fs.existsSync(filePath)){
      fs.unlinkSync(filePath)
    }

    cb(null, finalName);
  }
});
const upload = multer({ storage });

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



router.post('/create', authentication, upload.single('myfile'), async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.CREATE_POST);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  CREATE_POST(req , res)
})

module.exports = router