const Permissions = require("../constants/Permission");
const {
  RegisterUser,
  LoginUser,
  createRole,
  deleteRole,
  getPrmission,
  get_role_all,
  getRoleById,
  getPermissionsByRoleId,
  updaterole,
  removeRole,
  add_perm_role,
  forgot_pass,
  change_pass,
  get_all_users,
} = require("../controller/user_controller");
const { authentication , authorization } = require("../middleware/auth");
const { checkPermission } = require("../middleware/checkPermission");
const router = require("express").Router();



// upload profile
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    // ایمیل کاربر از سشن
    const rawEmail = req.session.user.email;

    // پاک‌سازی ایمیل برای استفاده در نام فایل

    // گرفتن پسوند فایل اصلی
    const ext = path.extname(file.originalname);

    // تنظیم نام فایل نهایی
    const finalName = `${rawEmail}${ext}`;
    const filePath = path.join('public/images/', finalName);
    if(fs.existsSync(filePath)){
      fs.unlinkSync(filePath)
    }

    cb(null, finalName);
  }
});
const upload = multer({ storage });
router.post('/upload/images', authentication,  upload.single('myfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'هیچ فایلی آپلود نشد' });
  }

  res.json({
    message: 'آپلود با موفقیت انجام شد',
    filename: req.file.filename,
    url: `/images/${req.file.filename}`
  });
});
// upload profile





router.get('/auth',  (req ,res) => {
 if(req.session.user){
  res.redirect('/user/panel')
 }else{
   res.render('auth')
 }
})

router.get('/panel', authentication, async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.PANEL_ACCESS);
  const getperms = await getPrmission(user.roles)
  const permname = getperms.map(r => r.permission_name)
  
  if (canAccess) {
   return res.render('admin_panel', {user : req.session.user , permissions : permname})
  }
  res.render('user_panel', {user : req.session.user})
})

router.post("/login", LoginUser);

router.post("/register",RegisterUser);


router.post("/role/create", authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.CREATE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  createRole(req, res);
});

router.delete('/role/delete/:role_id', authentication, async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.DELETE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  deleteRole(req, res);
})

router.post('/role/add', authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.ADD_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  addRole(req, res);
});

router.post('/role/remove/:fieldname/:value', authentication , async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.REMOVE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  const remove_role = await removeRole(req.params.fieldname , req.params.value)
  res.json(remove_role)
})
router.post('/role/add/perm',authentication, async(req, res) => {
     const user = await authorization(req);
  const canAccess = await checkPermission(user.roles, Permissions.EDIT_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  await add_perm_role(req , res)
})


router.get('/role/get/all', authentication , async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.VIEW_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
   get_role_all(req , res)
})

router.get('/role/edit/:id', authentication , async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.EDIT_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  const role_data = await getRoleById(req.params.id);
  const getPermissions = await getPermissionsByRoleId(role_data.id);
  res.render('partials/edit_role', { roleData: role_data, permissions: getPermissions });
})

router.put('/role/update/:id', authentication , async (req, res) => {
    const user = await authorization(req);
    const canAccess = await checkPermission(user.roles, Permissions.EDIT_ROLE);
    if (!canAccess){
      return res
        .status(403)
        .json({ message: "You do not have permission to perform this action" });
    }
   updaterole(req , res)

})

router.post("/forgot-password", forgot_pass)

router.post("/change-pass/:token", change_pass);

router.get('/get/all', authentication , async (req , res) => {
   const user = await authorization(req);
    const canAccess = await checkPermission(user.roles, Permissions.ADMINISTRATOR);
    if (!canAccess){
      return res
        .status(403)
        .json({ message: "You do not have permission to perform this action" });
    }
    const users = await get_all_users()
    res.json(users)
})

router.get('/logout', (req , res) => {
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
