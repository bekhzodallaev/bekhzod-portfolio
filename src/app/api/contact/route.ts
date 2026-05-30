
import { sendMail } from '@/src/lib/form/send-email';

export async function POST(request: Request) {
    
  try {
    const { name, email, message } = await request.json();

    await sendMail({
      email,
      subject: `Portfolio Contact - ${name}`,
      text: message,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}