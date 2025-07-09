import { Account, AccountError } from "../create-account.vm";
import { FormValidationResult } from "../../../common/validations/validations.model";
import { validateTypeField, validateNameField } from "./create-account-field.validation";


export const validateForm = (account: Account): FormValidationResult<AccountError> => {
    const fieldValidationResult = [
        validateTypeField(account.type),
        validateNameField(account.name),
    ];

    return {
        succeeded: fieldValidationResult.every((result) => result.succeeded),
        errors: {
            type: fieldValidationResult[0].errorMessage ?? "",
            name: fieldValidationResult[1].errorMessage ?? "",
        }
    };
};