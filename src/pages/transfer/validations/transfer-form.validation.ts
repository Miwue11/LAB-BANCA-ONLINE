import { TransferError, TransferVm } from "../transfer.vm";
import { validasteNameField, validateAccountIdField, validateAmountField, validateConceptField, validateEmailField, validateIBANfield, validateNotesField, validateRealDateTransferField } from "./transfer-field.validation";
import { FormValidationResult } from "../../../common/validations/validations.model";

export const validateForm = (transfer: TransferVm): FormValidationResult<TransferError> => {
    const fieldValidationResult = [
        validateAccountIdField(transfer.accountId),
        validateIBANfield(transfer.iban),
        validasteNameField(transfer.name),
        validateAmountField(transfer.amount),
        validateConceptField(transfer.concept),
        validateNotesField(transfer.notes),
        validateRealDateTransferField(transfer.realDateTransfer),
        validateEmailField(transfer.email),

    ]
    return {
        succeeded: fieldValidationResult.every((result) => result.succeeded),
        errors: {
            accountId: fieldValidationResult[0].errorMessage ?? "",
            iban: fieldValidationResult[1].errorMessage ?? "",
            name: fieldValidationResult[2].errorMessage ?? "",
            amount: fieldValidationResult[3].errorMessage ?? "",
            concept: fieldValidationResult[4].errorMessage ?? "",
            notes: fieldValidationResult[5].errorMessage ?? "",
            realDateTransfer: fieldValidationResult[6].errorMessage ?? "",
            email: fieldValidationResult[7].errorMessage ?? "",
            dateTransfer: "",
        }
    }
}