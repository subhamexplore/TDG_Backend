const express = require("express");
const router = express.Router();
const Consult = require("../models/Consult");
const { sendMail } = require("../helpers/sendMail");
const { htmlMail } = require("../helpers/htmlMail");

router.post("/consult", async (req, res) => {
  try {
    await Consult.create({
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      email: req.body.email,
      // dob: req.body.dob,
      // time: req.body.time,
      // mode: req.body.mode,
      reason: req.body.reason,
      question: req.body.question,
      // service: req.body.service,
      hear: req.body.hear,
      comment: req.body.comment,
    });
    const recipients = [req.body.email, " help@smartandelegant.life"];
    sendMail(
      recipients,
      req.body.fname + " " + req.body.lname + " - " + "Consultation Response",
      "",
      htmlMail(
        req.body.fname,
        req.body.lname,
        req.body.phone,
        req.body.email,
        // req.body.dob,
        // req.body.time,
        // req.body.mode,
        req.body.reason,
        req.body.question,
        // req.body.service,
        req.body.hear,
        req.body.comment
      )
    );
    res.json({ success: true });
  } catch (error) {
    console.log("errorrrr", error);
    res.json({ success: false });
  }
});

module.exports = router;
