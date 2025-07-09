import { isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInFormed, isValidIban, isValueNotNullOrUndifined } from "@/common/validations"
import { INVALID_AMOUNT_MESSAGE, INVALID_DATE_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_IBAN_MESSAGE } from "../../../common/validations/validations.const"
import { FieldValidationResult } from "../../../common/validations/validations.model"
import { buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, buildValidationSucceededResult } from "../../../common/validations/plain.validation.helper";



export const validateIBANfield = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    if (!isValidIban(value)) {
        return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
    }
    return buildValidationSucceededResult();


}

export const validateAccountIdField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
}

export const validasteNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
}

export const validateAmountField = (value: number): FieldValidationResult => {
    if (!isPositiveNumber(value)) {
        return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
    }
    return buildValidationSucceededResult();
}
export const validateConceptField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
}

export const validateNotesField = (_: string): FieldValidationResult => {
    return buildValidationSucceededResult();
}

export const validateRealDateTransferField = (value?: Date): FieldValidationResult => {
    if (!isValueNotNullOrUndifined(value)) {
        return buildValidationSucceededResult();
    }
    if (value && !isDateAfterToday(value)) {
        return buildValidationFailedResult(INVALID_DATE_MESSAGE);
    }
    return buildValidationSucceededResult();
}

export const validateEmailField = (value: string): FieldValidationResult => {
    if (!isValueNotNullOrUndifined(value)) {
        return buildValidationSucceededResult();
    }
    if (value && !isEmailWellFormed(value)) {
        return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
    }
    return buildValidationSucceededResult();
}


