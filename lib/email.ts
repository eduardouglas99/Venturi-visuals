import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  bcc?: string[]
}

export async function sendEmail({ to, subject, html, bcc }: SendEmailParams) {
  await transporter.sendMail({
    from: `"Contato Site" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    bcc
  });
}
