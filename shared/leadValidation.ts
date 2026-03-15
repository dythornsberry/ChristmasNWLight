export const leadServiceTypes = [
  "christmas-2026-new",
  "christmas-2026-returning",
  "permanent-lighting",
  "gutter-maintenance",
  "landscape-lighting",
  "year-round-services",
  "general-inquiry",
  "gutter-cleaning",
  "landscape-bistro-event",
] as const;

export type LeadServiceType = (typeof leadServiceTypes)[number];

export const LEAD_FORM_MIN_COMPLETION_MS = 1200;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const obviousSpamDomains = new Set([
  "example.com",
  "example.org",
  "example.net",
  "fake.com",
  "invalid.com",
  "mailinator.com",
  "tempmail.com",
  "test.com",
]);

function hasLetters(value: string) {
  return /[A-Za-z]/.test(value);
}

function isSequentialDigits(value: string) {
  return [
    "0123456789",
    "1234567890",
    "2345678901",
    "3456789012",
    "4567890123",
    "5678901234",
    "6789012345",
    "7890123456",
    "8901234567",
    "9876543210",
    "8765432109",
  ].includes(value);
}

export function formatPhoneNumber(value: string) {
  const digits = normalizePhoneDigits(value).slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function normalizePhoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function toE164(value: string) {
  const digits = normalizePhoneDigits(value);
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

export function hasCompletePhoneNumber(value: string) {
  return normalizePhoneDigits(value).length === 10;
}

export function normalizeLeadEmail(value: string) {
  return value.trim().toLowerCase();
}

export function getPhoneValidationError(value: string) {
  const digits = normalizePhoneDigits(value);

  if (!digits) {
    return "Enter your phone number.";
  }

  if (digits.length !== 10) {
    return "Enter a 10-digit phone number.";
  }

  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) {
    return "Enter a valid US phone number.";
  }

  if (/^(\d)\1{9}$/.test(digits) || new Set(digits).size < 3) {
    return "Enter a real phone number.";
  }

  if (isSequentialDigits(digits)) {
    return "Enter a real phone number.";
  }

  if (digits.slice(3, 6) === "555") {
    const lineNumber = Number(digits.slice(6));
    if (lineNumber >= 100 && lineNumber <= 199) {
      return "Enter a real phone number.";
    }
  }

  return null;
}

export function getEmailValidationError(value: string) {
  const email = normalizeLeadEmail(value);

  if (!email) {
    return "Enter your email address.";
  }

  if (email.length > 254 || !EMAIL_REGEX.test(email)) {
    return "Enter a valid email address.";
  }

  const [localPart, domain] = email.split("@");

  if (!localPart || !domain || localPart.startsWith(".") || localPart.endsWith(".")) {
    return "Enter a valid email address.";
  }

  if (localPart.includes("..") || domain.includes("..") || !domain.includes(".")) {
    return "Enter a valid email address.";
  }

  if (obviousSpamDomains.has(domain)) {
    return "Use your real email address.";
  }

  return null;
}

export function getNameValidationError(value: string, label = "name") {
  const trimmed = value.replace(/\s+/g, " ").trim();

  if (!trimmed) {
    return `Enter your ${label}.`;
  }

  if (trimmed.length < 2) {
    return `Enter a valid ${label}.`;
  }

  if (trimmed.length > 80) {
    return `${label[0].toUpperCase()}${label.slice(1)} is too long.`;
  }

  if (!hasLetters(trimmed) || /\d/.test(trimmed)) {
    return `Enter a valid ${label}.`;
  }

  return null;
}

export function getZipCodeValidationError(value: string, options?: { required?: boolean }) {
  const required = options?.required ?? true;
  const zipCode = value.trim();

  if (!zipCode) {
    return required ? "Enter your ZIP code." : null;
  }

  if (!/^\d{5}$/.test(zipCode)) {
    return "Enter a valid 5-digit ZIP code.";
  }

  return null;
}

export function getAddressValidationError(value: string, options?: { required?: boolean }) {
  const required = options?.required ?? false;
  const trimmed = value.replace(/\s+/g, " ").trim();

  if (!trimmed) {
    return required ? "Enter the service address." : null;
  }

  if (trimmed.length < 6 || trimmed.length > 160) {
    return "Enter a valid street address.";
  }

  if (!/\d/.test(trimmed) || !hasLetters(trimmed)) {
    return "Enter a valid street address.";
  }

  return null;
}

export function requiresProjectAddress(serviceType: string) {
  return serviceType !== "general-inquiry";
}
