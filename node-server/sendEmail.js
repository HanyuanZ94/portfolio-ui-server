const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express(),
      port = process.env.PORT || '3000';

app.use(cors({origin: "*"}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`The server started on port : ${port}`);
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Wellcome to FunOfHeuristic</h1>"
    );
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let form = req.body;
    sendMail(form, info => {
        console.log(`The mail has beed send, and the id is ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(form, callback) {
    const email = "hanyuan.portfolio@gmail.com";
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: email,
            pass: "zhyportfoliocontact"
        }
    });

    let mailOptions = {
        from: form.email,
        to: email,
        subject: "Portfolio : Contact From " + form.email + ", Object : " + form.object,
        text: form.text
    };

    let info = await transporter.sendMail(mailOptions);
    callback(info);
}
