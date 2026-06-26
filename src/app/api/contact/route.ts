/**
 * POST /api/contact
 * ----------------------------------------------------------------------------
 * Receives the contact form submission and emails it via Resend.
 *
 * Why this lives in a Route Handler instead of calling Resend straight from
 * the form: the Resend API key must never reach the browser — anyone could
 * read it out of the network tab and start sending email as if they were
 * Movax. Keeping this server-side means `process.env.RESEND_API_KEY` (no
 * `NEXT_PUBLIC_` prefix) is never bundled into client-side JavaScript at all.
 *
 * Server-side validation here isn't redundant with the form's `required`
 * attributes — those only stop submissions through the actual browser form.
 * Anyone can send a POST request directly to this URL, bypassing the form
 * entirely, so the real validation has to happen here.
 *
 * The Resend client is constructed *inside* the handler, not at module
 * scope. The Resend SDK throws immediately if it's built without an API
 * key — and Next.js evaluates this whole file during `next build` itself
 * (to collect route metadata), not only when a real request arrives. A
 * module-scope `new Resend(...)` would make the entire build fail outright
 * before `RESEND_API_KEY` is ever configured, instead of failing gracefully
 * at request time with a clear message — which is what the env-var check
 * below does instead.
 */
import { Resend } from "resend";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    // This fires if the site is deployed (or even just built) without the
    // two required env vars set — logged server-side so you can spot it,
    // but the visitor just gets a plain, honest "try emailing us directly"
    // message rather than a confusing generic failure.
    console.error(
      "Contact form is missing RESEND_API_KEY or CONTACT_EMAIL_TO — see .env.example.",
    );
    return NextResponse.json(
      { error: "The contact form isn't fully set up yet. Please email us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      // onboarding@resend.dev is Resend's shared sandbox sender — it works
      // with zero setup, but only delivers to the email address your own
      // Resend account is registered with. Once you verify your own
      // domain in the Resend dashboard, swap this for something like
      // "Movax Technologies <hello@movaxtechnologies.com>" so it can
      // deliver to CONTACT_EMAIL_TO regardless of which inbox that is.
      from: "Movax Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        service ? `Interested in: ${service}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}