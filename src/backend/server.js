const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/SendEmail");

//midddleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/api/itemsresults", async (req, res) => {
  const { email } = req.body;

  try {
    const send_to = "barnabas.usd@gmail.com";
    const sent_from = process.env.EMAIL_USER;
    const reply_to = "barnabas.usd@gmail.com";
    const subject = "Thank you message";
    const message = `
    <h3>Hello Zino</h3> 
    <p>Thank you for your tutorial</p>
    `;
    await sendEmail(send_to, sent_from, reply_to, subject, message);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
