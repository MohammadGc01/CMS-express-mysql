const router = require("express").Router();
const path = require('path')
const fs = require('fs');
const { authentication, authorization } = require("../middleware/auth");
const Permissions = require('../constants/Permission');
const { get_logs, delete_log, download_log } = require("../controller/log_controller");
const { checkPermission } = require("../middleware/checkPermission");

router.get('/', (req, res) => {
  res.render('home')
})


// upload profile
const multer = require('multer');
const db = require("../database/connection");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    // گرفتن نام اصلی فایل و پسوند آن
    const originalName = file.originalname;
    const ext = path.extname(originalName);
    const baseName = path.basename(originalName, ext);

    // فقط نام پایه را نگه می‌دارد
    const finalName = baseName + ext; // یا می‌توانید فقط baseName یا هر شیوه دیگری

    const filePath = path.join('public/images/', finalName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // حالا اگر می‌خواهید فقط نام بدون پسوند در بانک ذخیره کنید:
    req.body.file_base_name = baseName;

    cb(null, finalName);
  }
});

const upload = multer({ storage });

router.post('/upload/images', authentication, upload.single('myfile'), async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles, Permissions.CREATE_POST);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  
  if (!req.file) {
    return res.status(400).json({ error: 'هیچ فایلی آپلود نشد' });
  }

  // ثبت نام فقط اسم پایه فایل در پایگاه داده
  const fileNameWithoutExt = req.body.file_base_name; // این رو در بخش filename قرار دادم
  db.query("INSERT INTO images(name) VALUES(?)", [fileNameWithoutExt], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'خطا در ثبت تصویر در پایگاه داده' });
    }

    res.json({
      message: 'آپلود با موفقیت انجام شد',
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`
    });
  });
});


router.get('/images/:name', (req, res) => {
  const image_path = path.resolve(__dirname, '../public/images')
  const images = fs.readdirSync(image_path)
  const result = images.find(file => file.startsWith(req.params.name + "."))
  const full_path = path.resolve(`public/images/${result}`)
  res.sendFile(full_path)
})


router.get('/log/get', authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles, Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  get_logs(req, res)
})

router.post('/log/delete/:id', async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles, Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });
  delete_log(req, res)
})

router.get('/log/download/all', authentication, async (req, res) => {
  const user = await authorization(req);
  const canAccess = await checkPermission(user.roles, Permissions.VIEW_LOGS);
  if (!canAccess) return res.status(403).json({ message: "You do not have permission to perform this action" });

  download_log(req, res)
})

module.exports = router