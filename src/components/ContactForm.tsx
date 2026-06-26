"use client";

/**
 * ContactForm
 * ----------------------------------------------------------------------------
 * The actual form: client component because it needs state for the
 * submitting/success/error flow and an onSubmit handler — neither of which
 * a server component can do.
 *
 * The hidden "company-website" field is a honeypot: a trap field real
 * visitors never see (it's visually hidden and skipped from tab order), but
 * bots that blindly auto-fill every input on a page tend to fill it anyway.
 * If it arrives non-empty, we quietly pretend the submission succeeded
 * instead of actually sending an email — silently dropping it rather than
 * telling the bot "wrong answer, try again," which would just teach it to
 * adjust.
 */
import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Software Development",
  "Website Development",
  "Digital Marketing",
  "Branding",
  "IT Consultancy",
  "Data Science",
  "Kubernetes",
  "Artificial Intelligence",
  "Business Automation",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-border-subtle bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-cobalt";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company-website")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const responseBody = await response.json().catch(() => null);
        throw new Error(
          responseBody?.error ?? "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="py-10 text-center">
        <p className="font-display text-3xl text-lg font-medium text-foreground">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-foreground/70">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          type="text"
          id="company-website"
          name="company-website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          Company <span className="text-foreground/40">(optional)</span>
        </label>
        <input id="company" name="company" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground">
          What are you interested in?
        </label>
        <select id="service" name="service" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option} className="text-black bg-foreground border-2">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClasses} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}