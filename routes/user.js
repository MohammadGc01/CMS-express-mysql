const Permissions = require("../constants/Permission");
const bcrypt = require("bcrypt");

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
  get_user_by_id,
  update_user,
  addRole,
  get_user_role,
  removePerm,
} = require("../controller/user_controller");
const { authentication , authorization } = require("../middleware/auth");
const { checkPermission } = require("../middleware/checkPermission");
const router = require("express").Router();






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

  
  res.render("user_panel", {
    user: req.session.user,
  });
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

router.delete('/role/remove/:fieldname/:value', authentication , async (req , res) => {
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
router.post('/role/remove/perm/:id', authentication, async (req ,res) => {
 const user = await authorization(req);
 const canAccess = await checkPermission(user.roles, Permissions.REMOVE_PERM);
 if (!canAccess)
   return res
     .status(403)
      .json({ message: "You do not have permission to perform this action" });
  removePerm(req , res)
})

router.get('/role/get/all', authentication , async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.VIEW_ROLE);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  const roles = await get_role_all()
   res.json(roles.result)
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

router.get('/get/:id', authentication , async (req , res) => {
     const user = await authorization(req);
     const canAccess = await checkPermission(
       user.roles,
       Permissions.ADMINISTRATOR
     );
     if (!canAccess) {
       return res
         .status(403)
         .json({
           message: "You do not have permission to perform this action",
         });
     } 
  const userDATA = await get_user_by_id(req.params.id);
  const roleDATA = await get_user_role(userDATA.result[0], true)
  
  res.render("partials/edit_user", {
    title: req.session.setting.cms_name,
    setting: req.session.setting,
    css : false,
    user: userDATA.result[0],
    role: roleDATA.result
  });
  
    
     
})

router.put('/update/:id',authentication, async (req , res) => {
      const user = await authorization(req);
      const canAccess = await checkPermission(
        user.roles,
        Permissions.ADMINISTRATOR
      );
      if (!canAccess) {
        return res.status(403).json({
          message: "You do not have permission to perform this action",
        });
  } 
  
  update_user(req, res)
  
  
})

router.get('/logout', (req , res) => {
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
