const db = require("../database/connection");
const database = require("../database/database");
const mailler = require("../services/mailler");

async function create_contact(req, res) {
  const { name, email, subject, message, isRegistered } = req.body;

  const DataBase = new database(
    "contacts",
    ["name", "email", "subject", "text", "isRegister"],
    false,
    false,
    [name, email, subject, message, isRegistered]
  );
  const QueryRes = await DataBase.INSERT();

  if (QueryRes.success == true) return res.json("فرم درخواست شما ثبت شده و بزودی بررسی میشه");
  if (QueryRes.success == false) return res.json(QueryRes.message)

  // const emailBody = `
  //       کاربر گرامی،

  //       شما یک تماس شما ثبت شد:
  //       نام: ${name}
  //       ایمیل: ${email}
  //       موضوع: ${subject}
  //       پیام: ${message}
  //       وضعیت ثبت‌نامی: ${isRegistered ? "ثبت‌نام شده" : "ثبت‌نام نشده"}
  //     `;

  // const mail = new mailler(
  //   email,
  //   "تماس جدید ثبت شد",
  //   "فرم شما ثبت شد و در اولین فرصت بررسی خواهد شد"
  // );
  // await mail.send();
  // res.json({
  //   success: true,
  //   message: "درخواست شما ثبت شد و به زودی بررسی خواهد شد ",
  // });
}

module.exports = {
  create_contact,
};
