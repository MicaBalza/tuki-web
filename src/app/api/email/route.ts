import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, tel, source, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    auth: {
      user: process.env.NEXT_MY_EMAIL,
      pass: process.env.NEXT_MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_MY_EMAIL,
    to: "hola@tukistudio.tv",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: `Móvil: ${tel}
¿Cómo nos encontró?: ${source}
Mensaje: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
