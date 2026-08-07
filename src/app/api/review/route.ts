import { NextResponse } from "next/server";
import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID =
  process.env.EMAILJS_REVIEW_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

export interface ReviewRequestBody {
  name: string;
  email: string;
  rating: number;
  review: string;
  role?: string;
}

/**
 * Review endpoint sending emails through EmailJS nodejs SDK.
 * Uses EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID (or EMAILJS_REVIEW_TEMPLATE_ID),
 * EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY configured in .env.local.
 */
export async function POST(request: Request) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "EmailJS is not configured. Add EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID (or EMAILJS_REVIEW_TEMPLATE_ID), EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY in .env.local.",
      },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as Partial<ReviewRequestBody>;

    if (!body?.email || !/^\S+@\S+\.\S+$/.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!body?.name || body.name.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!body?.review || body.review.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Please enter your review comments." },
        { status: 400 },
      );
    }

    const rating = Number(body.rating) || 5;

    const templateParams = {
      user_name: body.name.trim(),
      user_email: body.email.trim(),
      rating: rating,
      review: body.review.trim(),
      role: body.role?.trim() || "User",
      submitted_at: new Date().toISOString(),
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

    console.error("Review email dispatch failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to submit review right now. Please try again later." },
      { status: 500 },
    );
  }
}
