import { TransferVm } from "../transfer.vm";
import { vi } from "vitest";
import * as transferFormValidation from "./transfer-field.validation";
import { validateForm } from "./transfer-form.validation";

describe("Transfer Form Validation", () => {
    describe("validateForm", () => {
        it("should return a successful validation result when all fields are valid", () => {
            // Arrange
            const transfer: TransferVm = {
                accountId: "1",
                iban: "ES9121000418450200051332",
                name: "John Doe",
                amount: 1,
                concept: "Test",
                notes: "¡",
                realDateTransfer: undefined,
                email: "",
                dateTransfer: ""
            };
            vi.spyOn(transferFormValidation, "validateIBANfield").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateAccountIdField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validasteNameField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateAmountField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateConceptField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateNotesField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateRealDateTransferField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateEmailField").mockReturnValue({ succeeded: true, });
            // Act
            const result = validateForm(transfer);
            // Assert
            expect(result.succeeded).toBe(true);
        })
        it("should return a failed validation result when any field is invalid", () => {
            // Arrange
            const transfer: TransferVm = {
                accountId: "1",
                iban: "ES9121000418450200051332",
                name: "John Doe",
                amount: 1,
                concept: "Test",
                notes: "¡",
                realDateTransfer: undefined,
                email: "",
                dateTransfer: ""
            };
            vi.spyOn(transferFormValidation, "validateIBANfield").mockReturnValue({ succeeded: false, errorMessage: "Invalid IBAN" });
            vi.spyOn(transferFormValidation, "validateAccountIdField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validasteNameField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateAmountField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateConceptField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateNotesField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateRealDateTransferField").mockReturnValue({ succeeded: true, });
            vi.spyOn(transferFormValidation, "validateEmailField").mockReturnValue({ succeeded: true, });
            // Act
            const result = validateForm(transfer);
            // Assert
            expect(result.succeeded).toBe(false);
            expect(result.errors.iban).toBe("Invalid IBAN");
        })
    })
})