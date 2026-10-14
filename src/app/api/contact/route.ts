import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting (5 requests per 10 minutes per IP)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateResult = checkRateLimit(ip);
    if (!rateResult.allowed) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Body
    const body = await req.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // 3. Honeypot check (anti-bot)
    if (data.website_hp && data.website_hp.length > 0) {
      // Silently accept without dispatching
      return NextResponse.json({ success: true, message: "Message dispatched" });
    }

    // 4. Resend Email Dispatch
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "abushahedpov@gmail.com";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Portfolio Inquiry <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: data.email,
        subject: `[Portfolio Inquiry] ${data.engagement} from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nScope: ${data.engagement}\n\nBrief:\n${data.brief}`,
      });
    } else {
      // In development or when Resend key is pending configuration
      console.log("[DEV MODE] Contact form received:", {
        from: `${data.name} <${data.email}>`,
        scope: data.engagement,
        brief: data.brief,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error while transmitting inquiry." },
      { status: 500 }
    );
  }
}
