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
} from "@shared/leadValidation";

export function combineName(firstName: string, lastName: string) {
  return `${firstName.trim()} ${lastName.trim()}`.replace(/\s+/g, " ").trim();
}
