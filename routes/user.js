const Permissions = require("../constants/Permission");
const {
  RegisterUser,
  LoginUser,
  createRole,
  deleteRole,
  updateProfile,
} = require("../controller/user_controller");
const { authentication , authorization } = require("../middleware/auth");

const router = require("express").Router();

router.get('/auth',  (req ,res) => {
 if(req.session.user){
  res.redirect('/user/panel')
 }else{
   res.render('auth')
 }
})

router.get('/panel', authentication, async (req , res) => {
  res.render('user_panel', {user : req.session.user})
})

router.post("/login", (req, res) => {
  LoginUser(req, res);
});

router.post("/register", (req, res) => {
  RegisterUser(req, res);
});

router.post('/update/profile' , authentication, (req , res) => {
updateProfile(req , res)
})

router.post("/role/create", authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.role,Permissions.CREATE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  createRole(req, res);
});

router.delete('/role/delete/:role_id', authentication, async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.role,Permissions.DELETE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  deleteRole(req, res);
  
})

router.post('/role/add', authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.role,Permissions.ADD_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  addRole(req, res);
});

router.post('/role/remove/:user_id', authentication , async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.role,Permissions.REMOVE_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  removeRole(req,res)
})

router.get('/contactus', (req , res) => {
   res.render('contactus')
})


router.get('/logout', (req , res) => {
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
