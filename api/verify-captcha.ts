import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, message, subject } = req.body;

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    await transport.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `[Contato do Site] ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\n${message}`,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: "Email enviado!" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}