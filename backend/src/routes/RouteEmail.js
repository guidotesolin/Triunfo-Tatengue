var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/mail");

// Tomar del Connect devices de cualquier mail la configuracion de salida diferente de SSL

const transporter = nodemailer.createTransport({
  host: "mail.triunfotatengue.com.ar",
  port: 587,
  secure: false,
  auth: {
    user: creds.user,
    pass: creds.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("El servidor se encuentra listo para recibir mensajes");
  }
});

router.post("/send", (req, res, next) => {
  const { name, email, phone, message } = req.body;

  var Asunto = "Contacto en la pagina web (" + name + ")";

  contentHTML = `
        <h1> Nuevo contacto desde la pagina web:</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Mail: ${email}</li>
            <li>Telefono: ${phone}</li>
        </ul>
        <h3>Mensaje:</h3>
        <p>${message}</p>
  `;

  var Correo = {
    from: "'Triunfo Tatengue Web' <info@triunfotatengue.com.ar>",
    to: "contacto@triunfotatengue.com.ar",
    subject: Asunto,
    html: contentHTML,
  };

  transporter.sendMail(Correo, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;
