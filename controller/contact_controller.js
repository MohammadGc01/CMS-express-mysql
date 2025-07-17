const db = require("../database/connection");
const mailler = require("../services/mailler");

async function create_contact(req, res) {
  const { name, email, subject, message, isRegistered } = req.body;

  const sql =
    "INSERT INTO contacts(name,email,subject,text,isRegister) VALUES (?,?,?,?,?)";
  db.query(
    sql,
    [name, email, subject, message, isRegistered],
    async (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: err.message,
        });
      }

      const emailBody = `
        کاربر گرامی،

        شما یک تماس شما ثبت شد:
        نام: ${name}
        ایمیل: ${email}
        موضوع: ${subject}
        پیام: ${message}
        وضعیت ثبت‌نامی: ${isRegistered ? "ثبت‌نام شده" : "ثبت‌نام نشده"}
      `;

      const mail = new mailler(email, "ثبت تماس ماد اسکیپ", emailBody);
      await mail.send();
      res.json({
        success: true,
        message: "درخواست شما ثبت شد و به زودی بررسی خواهد شد ",
      });
    }
  );
}

module.exports = {
  create_contact,
};
