const express = require("express");
const router = express.Router();
const Consult = require("../models/Subscribe");
const { sendMail } = require("../helpers/sendMail");
const { htmlMail } = require("../helpers/subscribeHtml");

router.post("/subscribe", async (req, res) => {
  try {
    await Consult.create({
      email: req.body.email,
    });
    const recipients = [req.body.email];
    sendMail(
      recipients,
      "Subscription to TDG News",
      "",
      htmlMail(
        req.body.email
      )
    );
    res.json({ success: true });
  } catch (error) {
    console.log("errorrrr", error);
    res.json({ success: false });
  }
});

module.exports = router;
