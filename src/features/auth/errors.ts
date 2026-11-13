import type { ValidationKey } from "@/lib/validation/auth";

/** Translation keys from the "authErrors" namespace. */
export type AuthErrorKey =
  | "invalidCredentials"
  | "emailNotConfirmed"
  | "rateLimited"
  | "weakPassword"
  | "samePassword"
  | "sessionExpired"
  | "emailTaken"
  | "generic";

export type FormState = {
  status: "idle" | "error" | "success";
  fieldErrors?: Partial<Record<string, ValidationKey>>;
  formError?: AuthErrorKey;
  /** Echoed back so the form keeps what the user typed. */
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

/** Maps a Supabase Auth error code to a user-friendly message key. */
export function authErrorKey(code: string | undefined): AuthErrorKey {
  switch (code) {
    case "invalid_credentials":
      return "invalidCredentials";
    case "email_not_confirmed":
      return "emailNotConfirmed";
    case "over_email_send_rate_limit":
    case "over_request_rate_limit":
      return "rateLimited";
    case "weak_password":
      return "weakPassword";
    case "same_password":
      return "samePassword";
    case "user_already_exists":
    case "email_exists":
      return "emailTaken";
    case "session_not_found":
    case "session_expired":
      return "sessionExpired";
    default:
      return "generic";
  }
}
