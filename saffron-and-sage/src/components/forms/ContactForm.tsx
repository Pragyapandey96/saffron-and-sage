import { useState, type FormEvent } from "react";
import { site } from "../../data/site";
import { buildMailto } from "../../lib/mailto";
import { Button, buttonStyles } from "../ui/Button";
import { errorClass, inputClass, labelClass } from "./fieldStyles";

interface Values {
  name: string;
  email: string;
  message: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found: Errors = {};
    if (!values.name.trim()) found.name = "Please enter your name.";
    if (!values.email.trim()) found.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email.trim()))
      found.email = "That email address doesn't look right.";
    if (!values.message.trim()) found.message = "Please write a message.";
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setPrepared(true);
    } else {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
    }
  }

  if (prepared) {
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    return (
      <div
        role="status"
        className="rounded-[2rem] bg-cream-100 p-8 ring-1 ring-cream-300 sm:p-10"
      >
        <h2 className="text-3xl font-medium text-forest-900">
          Your message is ready, but not sent yet
        </h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          This website has no server to receive messages, so{" "}
          <strong className="text-forest-900">
            nothing has been sent or saved
          </strong>
          . Use the button below to open your email app with the message
          filled in.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className={buttonStyles("primary", "lg")}
            href={buildMailto(
              site.email,
              `Message from ${values.name.trim()}`,
              body,
            )}
          >
            Open in my email app
          </a>
          <Button variant="outline" size="lg" onClick={() => setPrepared(false)}>
            Edit message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[2rem] bg-cream-100 p-8 ring-1 ring-cream-300 sm:p-10"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={inputClass(!!errors.message)}
          />
          {errors.message && (
            <p id="contact-message-error" className={errorClass}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-sm text-ink-soft">
          Submitting opens your own email app. This site doesn&rsquo;t store
          messages.
        </p>
        <Button type="submit" size="lg">
          Prepare my message
        </Button>
      </div>
    </form>
  );
}
