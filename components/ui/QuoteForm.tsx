"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { cleaningTypes, propertyTypes, site } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  cleaningType: string;
  propertyType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  cleaningType: "",
  propertyType: "",
  message: "",
};

const fieldClass =
  "w-full appearance-none rounded-none border border-border bg-surface px-4 py-3.5 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-sage md:py-3 md:text-sm";

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[0-9+().\-\s]{7,20}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.cleaningType) {
    errors.cleaningType = "Select a cleaning type.";
  }

  if (!values.propertyType) {
    errors.propertyType = "Select a property type.";
  }

  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showMockupNote, setShowMockupNote] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setShowMockupNote(false);
      return;
    }

    // Mockup only: do not send data. Connect later via Netlify Forms
    // or NEXT_PUBLIC_FORM_ENDPOINT without changing these fields.
    setShowMockupNote(true);
  }

  return (
    <form
      name="quote"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 md:space-y-5"
    >
      <input type="hidden" name="form-name" value="quote" />
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          autoCapitalize="words"
          autoCorrect="off"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          className={cn(fieldClass, "min-h-12", errors.name && "border-red-700")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={cn(fieldClass, "min-h-12", errors.phone && "border-red-700")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={cn(fieldClass, "min-h-12", errors.email && "border-red-700")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <Field id="cleaningType" label="Cleaning Type" error={errors.cleaningType}>
          <select
            id="cleaningType"
            name="cleaningType"
            value={values.cleaningType}
            onChange={(event) => update("cleaningType", event.target.value)}
            className={cn(fieldClass, "min-h-12", errors.cleaningType && "border-red-700")}
            aria-invalid={Boolean(errors.cleaningType)}
            aria-describedby={
              errors.cleaningType ? "cleaningType-error" : undefined
            }
          >
            <option value="">Select one</option>
            {cleaningTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field id="propertyType" label="Property Type" error={errors.propertyType}>
          <select
            id="propertyType"
            name="propertyType"
            value={values.propertyType}
            onChange={(event) => update("propertyType", event.target.value)}
            className={cn(fieldClass, "min-h-12", errors.propertyType && "border-red-700")}
            aria-invalid={Boolean(errors.propertyType)}
            aria-describedby={
              errors.propertyType ? "propertyType-error" : undefined
            }
          >
            <option value="">Select one</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message / Cleaning Needs" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn(fieldClass, "resize-y", errors.message && "border-red-700")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <div>
        <Button type="submit" className="w-full md:w-auto">
          Request a Free Quote
        </Button>
        {showMockupNote ? (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft" role="status">
            Online quote requests will be enabled when the website goes live. Call{" "}
            <a href={site.phone.href} className="text-ink underline decoration-border underline-offset-4">
              {site.phone.display}
            </a>{" "}
            to reach Jones Happy Housekeepers now.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[12px] uppercase tracking-[0.08em] text-ink-soft">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
