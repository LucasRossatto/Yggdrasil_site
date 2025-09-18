import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
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

    await transport.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}