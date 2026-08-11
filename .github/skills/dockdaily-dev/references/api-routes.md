# API Routes

All API routes live under `src/app/api/<name>/route.ts` and follow the Next.js App Router handler convention.

## Minimal POST Handler

```ts
// filepath: src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };
    if (!body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }
    // ... do work
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
```

## Response Shape

Always return JSON in the form:

```ts
{ ok: true }                                // success
{ ok: false, error: "Human readable msg" }  // failure
```

Use appropriate HTTP status codes:

- `200` — success
- `400` — bad request / validation failure
- `405` — method not allowed (also export `OPTIONS` if needed)
- `500` — server / third-party failure

## EmailJS Pattern

See `src/app/api/waitlist/route.ts` and `src/app/api/review/route.ts` for the canonical pattern:

1. Read all EmailJS env vars at module top.
2. Return `500` early with a clear message if any are missing.
3. Validate request body; return `400` on missing fields.
4. Wrap `emailjs.send` in `try/catch` and translate `EmailJSResponseStatus` into a structured response.

```ts
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
// ...other vars

if (!SERVICE_ID || !TEMPLATE_ID /* ... */) {
  return NextResponse.json(
    { ok: false, error: "EmailJS is not configured. Add EMAILJS_* env vars." },
    { status: 500 },
  );
}
```

## Caching

API route handlers are dynamic by default. If a route is safe to cache, export:

```ts
export const dynamic = "force-dynamic"; // default — keep for write endpoints
export const revalidate = 60; // for read endpoints with periodic refresh
```

For POST/PUT/PATCH/DELETE, leave caching defaults (do not set `revalidate`).
