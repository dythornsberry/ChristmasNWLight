export {
  formatPhoneNumber,
  getAddressValidationError,
  getEmailValidationError,
  getNameValidationError,
  getPhoneValidationError,
  getZipCodeValidationError,
  hasCompletePhoneNumber,
  normalizeLeadEmail,
  requiresProjectAddress,
  toE164,
} from "@shared/leadValidation";

export function combineName(firstName: string, lastName: string) {
  return `${firstName.trim()} ${lastName.trim()}`.replace(/\s+/g, " ").trim();
}

type LeadDeliveryResult = {
  ok: boolean;
  status?: number;
};

async function postLead(endpoint: string, payload: Record<string, unknown>): Promise<LeadDeliveryResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return { ok: response.ok, status: response.status };
  } catch {
    return { ok: false };
  }
}

export async function deliverQuoteLead(payload: Record<string, unknown>) {
  const [zapierResult, backupEmailResult] = await Promise.all([
    postLead("/api/submit-quote", payload),
    postLead("/api/backup-email", payload),
  ]);

  if (!zapierResult.ok) {
    console.error("Primary quote delivery failed:", zapierResult.status ?? "network error");
  }

  if (!backupEmailResult.ok) {
    console.error("Backup quote delivery failed:", backupEmailResult.status ?? "network error");
  }

  if (!zapierResult.ok && !backupEmailResult.ok) {
    throw new Error("We couldn't send your request. Please call (425) 215-0935 so we can help right away.");
  }
}
