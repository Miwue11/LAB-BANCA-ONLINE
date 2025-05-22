import {
  createEmptyCredentialsFormErrors,
  CredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}
export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };
  if (!credentials.user.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      user: "User is required",
    };
    validationResult.succeeded = false;
  }
  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Password is required",
    };
    validationResult.succeeded = false;
  }
  return validationResult;
};
