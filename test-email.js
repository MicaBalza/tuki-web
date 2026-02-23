const nodemailer = require("nodemailer");

async function main() {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",  // <- cambio importante
      port: 587,
      secure: false,
      auth: {
        user: "hola@tukistudio.tv",   // reemplaza con tu email Zoho
        pass: "yvQ0ChZxKyEY"   // reemplaza con la contraseña de aplicación
      }
    });

    await transporter.verify();
    console.log("Conexión SMTP correcta ✅");

    let info = await transporter.sendMail({
      from: '"Tuki Web" <hola@tukistudio.tv>',
      to: "holanatbalza@gmail.com",
      subject: "Prueba Nodemailer v8 EU",
      text: "¡Todo listo! Esto es un test desde Node.js usando Zoho EU"
    });

    console.log("Mensaje enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
}

main();