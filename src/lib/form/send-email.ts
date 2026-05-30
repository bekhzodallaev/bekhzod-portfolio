import nodemailer from 'nodemailer';

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

if (!SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD) {
  throw new Error('Missing SMTP credentials');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

type SendMailParams = {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: SendMailParams) {
  try {
    const info = await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      replyTo: email,
      to: sendTo ?? SITE_MAIL_RECEIVER,
      subject,
      text,
      html,
    });

    console.log('Message sent:', info.messageId);

    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}