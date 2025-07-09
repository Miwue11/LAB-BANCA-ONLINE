import { FormValidationResult } from "@/common/validations";
import {
  Credentials,
  CredentialsFormErrors,
} from "./login.vm";
import { validatePasswordField, validateUserField } from "./login-field.validation";


export const validateForm = (credentials: Credentials): FormValidationResult<CredentialsFormErrors> => {
  const fieldValidationResult = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ]
  return {
    succeeded: fieldValidationResult.every((result) => result.succeeded),
    errors: {
      user: fieldValidationResult[0].errorMessage ?? "",
      password: fieldValidationResult[1].errorMessage ?? "",

    }
  }
}