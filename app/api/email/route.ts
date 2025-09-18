import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `[Contato do Site] ${name}`,
    text: `
    Você recebeu uma nova mensagem de contato:

    Nome: ${name}
    E-mail: ${email}

    Assunto: ${subject}

    Mensagem:
    ${message}
        `.trim(),
        replyTo: email,
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
  return NextResponse.json({ message: "Email enviado com sucesso" }, { status: 200 });
} catch (err) {
  return NextResponse.json({ error: err }, { status: 500 });
}
}