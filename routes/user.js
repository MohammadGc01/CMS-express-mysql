const Permissions = require("../constants/Permission");
const {
  RegisterUser,
  LoginUser,
  createRole,
  deleteRole,
} = require("../controller/user_controller");
const { authentication , authorization } = require("../middleware/auth");

const router = require("express").Router();

router.get('/auth',  (req ,res) => {
 if(req.session.user){
  res.redirect('/')
 }else{
   res.render('auth')
 }
})

router.post("/login", (req, res) => {
  LoginUser(req, res);
});

router.post("/register", (req, res) => {
  RegisterUser(req, res);
});

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

module.exports = router;
