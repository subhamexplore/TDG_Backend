const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "subhammurthy@gmail.com",
    pass: "wvuyhydtqlvwuqaj",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {
  const recipients = Array.isArray(to) ? to.join(',') : to;
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'ddiallo@thediallogroupllc.com', // sender address
    to:recipients,
    subject,
    text,
    html
  });
}

module.exports = {sendMail}