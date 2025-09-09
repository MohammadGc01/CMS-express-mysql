const nodemailer = require("nodemailer");
const Logger = require("../services/Logger");
const db = require("../database/connection");
require("dotenv").config();

async function send_email(to, subject, text) {
  const result = await new Promise((resolve, reject) => {
    db.query(
      "SELECT cms_mailler_service, cms_mailler_user, cms_mailler_pass FROM setting WHERE 1",
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });

  const { cms_mailler_service, cms_mailler_user, cms_mailler_pass } = result[0];

  const transporter = nodemailer.createTransport({
    service: cms_mailler_service,
    auth: {
      user: cms_mailler_user,
      pass: cms_mailler_pass,
    },
  });

  const mailOption = {
    from: cms_mailler_user,
    to: `${to}`,
    subject: `${subject}`,
    text: `${text}`,
  };

  transporter.sendMail(mailOption, async (err, info) => {
    if (err) {
      const log = new Logger(
        `ارسال نشدن ایمیل : ${err.name}`,
        `موقع ارسال ایمیل به : ${to} با موضوع \n : ${subject} \n و متن : ${text} مشکلی به وجود امد \n متن خطا  : ${err.message}`,
        "error",
        "NONE"
      );
      await log.save();
      console.log(err.message);
      return;
    }

    const log = new Logger(
      "ارسال موفق ایمیل",
      `ایمیل جدیدی به  : ${mailOption.to} \n موضوع : ${mailOption.subject} \n با متن  : ${mailOption.text}`,
      "info",
      "NONE"
    );
    await log.save();
  });
}

module.exports = {
  send_email,
};
