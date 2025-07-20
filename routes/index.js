const router = require("express").Router();
const path = require('path')
const fs = require('fs');
const { authentication, authorization } = require("../middleware/auth");
const Permissions = require('../constants/Permission');
const { get_logs, get_logs_search, delete_log, download_log } = require("../controller/log_controller");
const { checkPermission } = require("../middleware/checkPermission");

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


router.get('/log/get', authentication, async (req , res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  get_logs(req , res)
})

router.post('/log/delete/:id', async (req , res) => {
   const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  delete_log(req , res)
})

router.get('/log/download/all', authentication ,async (req , res) => {
 const user = await authorization(req);
  const canAccess = await checkPermission(user.roles,Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  
  download_log(req , res)
   console.log("Session:", req.session);
  console.log("User:", req.session.user); // یا هر چیزی که ذخیره کردی
})

module.exports = router