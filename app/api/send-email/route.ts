import { sendEmail } from "../../../lib/email";
import { contactEmailTemplate } from "../../../lib/email-template";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const html = contactEmailTemplate(body);

    await sendEmail({
      to: 'process.env.SMTP_USER!',
      subject: "📩 Novo contato pelo site",
      html,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);

    return Response.json(
      {
        success: false,
        error: error?.message || "Erro ao enviar email",
      },
      { status: 500 }
    );
  }
}
