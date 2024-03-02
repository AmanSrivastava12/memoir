require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const User = require("../models/userModel");
const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const { name, phone, email, emailbody } = req.body;
    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_PASSWORD,
      },
    });
    transport.sendMail(
      {
        from: `"Memoir"<${process.env.FROM_EMAIL}>`,
        to: email,
        subject: "Acknowledge Mail",
        html: `Hi ${name},<br>We are pleased to inform you that we have received your email. Thankyou for your concern.
        We will be contacting you shortly.<br>This is an auto generated email. Please do not reply to the same.`,
      },
      (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
      }
    );
    await new User({
      name,
      phone,
      email,
      emailbody,
    }).save();
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
});

module.exports = router;
