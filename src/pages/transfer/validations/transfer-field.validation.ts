import { isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInFormed, isValidIban, isValueNotNullOrUndifined } from "@/common/validations"
import { FieldValidationResult } from "../transfer.vm"


export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "El IBAN no es válido";
export const INVALID_AMOUNT_MESSAGE = "El monto debe ser un número positivo";
export const INVALID_DATE_MESSAGE = "La fecha debe ser posterior a la fecha actual";
export const INVALID_EMAIL_MESSAGE = "El email no es válido";
const buildValidationFailedResult = (errorMessage: string): FieldValidationResult => {
    return {
        succeeded: false,
        errorMessage: errorMessage,
    }
}

const buildValidationSucceededResult = (): FieldValidationResult => {
    return {
        succeeded: true,

    }
}


export const validateIBANfield = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
    }
    if (!isValidIban(value)) {
        return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
    }
    return buildValidationSucceededResult();


}

export const validateAccountIdField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
    }
    return buildValidationSucceededResult();
}

export const validasteNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInFormed(value)) {
        return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
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
        return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
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