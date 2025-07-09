import { FieldValidationResult, isStringValueInFormed, buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult } from "@/common/validations";

export const validateUserField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
}

export const validatePasswordField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
}