import { REQUIRED_FIELD_MESSAGE } from "./validations.const"
import { FieldValidationResult } from "./validations.model"

export const buildValidationFailedResult = (errorMessage: string): FieldValidationResult => {
    return {
        succeeded: false,
        errorMessage: errorMessage,
    }
}

export const buildValidationSucceededResult = (): FieldValidationResult => {
    return {
        succeeded: true,
    }
}
export const buildRequiredFieldValidationFailedResponse = () => buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);