import { NextResponse } from "next/server";
import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

/**
 * Waitlist endpoint sending emails through EmailJS.
 * Configure EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
 * EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY in .env.local.
 */
export async function POST(request: Request) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "EmailJS is not configured. Add EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY.",
      },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as { email?: string; source?: string };
    if (!body?.email) {
      return NextResponse.json(
        { ok: false, error: "Missing email" },
        { status: 400 },
      );
    }

    const templateParams = {
      email: body.email,
      source: body.source || "unknown",
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
      },
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      const status =
        typeof error.status === "number" &&
        error.status >= 200 &&
        error.status < 600
          ? error.status
          : 500;
      return NextResponse.json(
        { ok: false, error: error.text || "EmailJS request failed." },
        { status },
      );
    }

    console.error("Waitlist email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send email right now." },
      { status: 500 },
    );
  }
}
