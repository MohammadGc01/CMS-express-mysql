const nodemailer = require("nodemailer");
const logger = require("../services/logger");
require("dotenv").config();

async function send_email(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: process.env.MaillerService,
    auth: {
      user: process.env.MaillerUser,
      pass: process.env.MaillerPass,
    },
  });

  const mailOption = {
    from: process.env.MaillerUser,
    to: `${to}`,
    subject: `${subject}`,
    text: `${text}`,
  };

  transporter.sendMail(mailOption, async (err, info) => {
    if (err) {

      const log = new logger(`ارسال نشدن ایمیل : ${err.name}`, 
        `موقع ارسال ایمیل به : ${to} با موضوع \n : ${subject} \n و متن : ${text} مشکلی به وجود امد \n متن خطا  : ${err.message}`, 
        'error', 'NONE')
      await log.save()
      console.log(err.message);
      return;
    }

    const log = new logger('ارسال موفق ایمیل', 
      `ایمیل جدیدی به  : ${mailOption.to} \n موضوع : ${mailOption.subject} \n با متن  : ${mailOption.text}`, 'info', 'NONE')
    await log.save();

  })
}

module.exports = {
  send_email,
};
