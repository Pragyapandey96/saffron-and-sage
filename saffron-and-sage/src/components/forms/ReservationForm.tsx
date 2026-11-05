import { useMemo, useState, type FormEvent } from "react";
import { maxOnlineParty, seatingByWeekday, site } from "../../data/site";
import {
  formatLongDate,
  formatTime,
  generateSlots,
  todayISO,
  weekdayOf,
} from "../../lib/dates";
import { buildMailto } from "../../lib/mailto";
import { Button, buttonStyles } from "../ui/Button";
import { errorClass, inputClass, labelClass } from "./fieldStyles";

interface Values {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(values.email.trim()))
    errors.email = "That email address doesn't look right.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";

  if (!values.date) {
    errors.date = "Please choose a date.";
  } else if (values.date < todayISO()) {
    errors.date = "Please choose today or a future date.";
  } else {
    const weekday = weekdayOf(values.date);
    if (weekday === null) errors.date = "Please choose a valid date.";
    else if (seatingByWeekday[weekday] === null)
      errors.date = "We're closed on Mondays. Please choose another day.";
  }

  if (!values.time) errors.time = "Please choose a time.";
  return errors;
}

export function ReservationForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<Values | null>(null);

  const slots = useMemo(() => {
    const weekday = weekdayOf(values.date);
    const seating = weekday === null ? null : seatingByWeekday[weekday];
    return seating ? generateSlots(seating.first, seating.last) : [];
  }, [values.date]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => {
      const next = { ...current, [key]: value };
      // A new date can invalidate the previously chosen time.
      if (key === "date") next.time = "";
      return next;
    });
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setPrepared(values);
    } else {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`res-${firstKey}`)?.focus();
    }
  }

  if (prepared) {
    const body = [
      `Hello ${site.name},`,
      "",
      "I would like to request a table:",
      `Name: ${prepared.name}`,
      `Date: ${formatLongDate(prepared.date)}`,
      `Time: ${formatTime(prepared.time)}`,
      `Guests: ${prepared.guests}`,
      `Phone: ${prepared.phone}`,
      `Email: ${prepared.email}`,
      prepared.notes ? `Notes: ${prepared.notes}` : "",
      "",
      "Please confirm availability. Thank you!",
    ]
      .filter((line, index, all) => line !== "" || all[index - 1] !== "")
      .join("\n");

    return (
      <div
        role="status"
        className="rounded-[2rem] bg-cream-100 p-8 ring-1 ring-cream-300 sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-700">
          One more step
        </p>
        <h2 className="mt-3 text-3xl font-medium text-forest-900 sm:text-4xl">
          Your request is ready, but not sent yet
        </h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          This website isn&rsquo;t connected to a booking system, so{" "}
          <strong className="text-forest-900">
            nothing has been sent or saved
          </strong>
          . Your table is not reserved until the restaurant confirms it. Send
          the request by email or give us a call:
        </p>

        <dl className="mt-6 grid gap-x-8 gap-y-3 rounded-2xl bg-cream-50 p-6 text-sm sm:grid-cols-2">
          <Summary label="Name" value={prepared.name} />
          <Summary label="Guests" value={prepared.guests} />
          <Summary label="Date" value={formatLongDate(prepared.date)} />
          <Summary label="Time" value={formatTime(prepared.time)} />
          <Summary label="Phone" value={prepared.phone} />
          <Summary label="Email" value={prepared.email} />
          {prepared.notes && (
            <div className="sm:col-span-2">
              <Summary label="Notes" value={prepared.notes} />
            </div>
          )}
        </dl>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className={buttonStyles("primary", "lg")}
            href={buildMailto(
              site.reservationsEmail,
              `Table request: ${formatLongDate(prepared.date)}`,
              body,
            )}
          >
            Email this request
          </a>
          <a
            className={buttonStyles("outline", "lg")}
            href={`tel:${site.phoneHref}`}
          >
            Call {site.phone}
          </a>
          <Button variant="outline" size="lg" onClick={() => setPrepared(null)}>
            Edit details
          </Button>
        </div>
      </div>
    );
  }

  const guestOptions = Array.from({ length: maxOnlineParty }, (_, i) => i + 1);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[2rem] bg-cream-100 p-8 ring-1 ring-cream-300 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className={labelClass}>
            Full name
          </label>
          <input
            id="res-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "res-name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p id="res-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="res-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "res-phone-error" : undefined}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p id="res-phone-error" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-email" className={labelClass}>
            Email
          </label>
          <input
            id="res-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "res-email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p id="res-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-date" className={labelClass}>
            Date
          </label>
          <input
            id="res-date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={errors.date ? true : undefined}
            aria-describedby={errors.date ? "res-date-error" : undefined}
            className={inputClass(!!errors.date)}
          />
          {errors.date && (
            <p id="res-date-error" className={errorClass}>
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-time" className={labelClass}>
            Time
          </label>
          <select
            id="res-time"
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
            disabled={slots.length === 0}
            aria-invalid={errors.time ? true : undefined}
            aria-describedby={errors.time ? "res-time-error" : "res-time-hint"}
            className={inputClass(!!errors.time)}
          >
            <option value="">
              {slots.length === 0 ? "Choose a date first" : "Select a time"}
            </option>
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </select>
          {errors.time ? (
            <p id="res-time-error" className={errorClass}>
              {errors.time}
            </p>
          ) : (
            <p id="res-time-hint" className="mt-1.5 text-sm text-ink-soft">
              Times shown are our bookable seatings.
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-guests" className={labelClass}>
            Number of guests
          </label>
          <select
            id="res-guests"
            value={values.guests}
            onChange={(e) => update("guests", e.target.value)}
            aria-describedby="res-guests-hint"
            className={inputClass(false)}
          >
            {guestOptions.map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <p id="res-guests-hint" className="mt-1.5 text-sm text-ink-soft">
            For parties of {maxOnlineParty + 1} or more, please call us.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-notes" className={labelClass}>
            Allergies or special occasion{" "}
            <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <textarea
            id="res-notes"
            rows={4}
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={inputClass(false)}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-ink-soft">
          Submitting prepares your request. You&rsquo;ll then send it by email
          or phone, as nothing is stored by this website.
        </p>
        <Button type="submit" size="lg">
          Prepare my request
        </Button>
      </div>
    </form>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </dt>
      <dd className="mt-0.5 break-words text-forest-900">{value}</dd>
    </div>
  );
}
