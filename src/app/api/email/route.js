import { transporter } from "@/config/nodemailer";

export async function POST(req) {
  if (req.method === "POST") {
    const data = await req.json();

    if (!data.message) {
      return Response.json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_FROM,
        subject: data.subject,
        html: `<p>Program: ${data.program}</p> <p>Temat: ${data.subject}</p> <p>Wiadomość: ${data.message}</p>`,
      });

      return Response.json({ success: true });
    } catch (error) {
      console.log(error);
      return Response.json({ message: error.message });
    }
  }

  return Response.json({ message: "Bad request" });
}
