const express = require("express");

const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("HELLO");
});

app.post("/get-report", async (req, res) => {
  const { name, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "barnabas.usd@gmail.com",
      pass: "lyhjdcjllfneetul",
    },
  });

  const options = {
    from: "barnabas.usd@gmail.com",
    to: email,
    subject: name,
    html: `<h3>POWER REPORT</h3>
    <span>Here is your calculated power report</span>`,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log("Email sent successfully");
    console.log(info.envelope);
    res.status(200).send("Email delivered successfully");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
