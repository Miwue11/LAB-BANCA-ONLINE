

import { validasteNameField, validateAccountIdField, validateAmountField, validateConceptField, validateEmailField, validateIBANfield, validateNotesField } from "./transfer-field.validation";
import { INVALID_AMOUNT_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_IBAN_MESSAGE, REQUIRED_FIELD_MESSAGE } from "../../../common/validations/validations.const"
describe("transfer-field.validation specs", () => {
    describe("validateEmailField", () => {
        it("should return false when email is empty", () => {
            // Arrange
            const value = "";
            // Act
            const result = validateEmailField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );
        it("should return false when email is not well formed", () => {
            // Arrange
            const value = "invalid-email";
            // Act
            const result = validateEmailField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
        }
        );
        it("should return true when email is well formed", () => {
            // Arrange
            const value = "hr2miguellopez@gmail.com";
            // Act
            const result = validateEmailField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );
    })
    describe("validateNotesField", () => {
        it("should return true when notes is empty", () => {
            // Arrange
            const value = "";
            // Act
            const result = validateNotesField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );
        it("should return true when notes is well formed", () => {
            // Arrange
            const value = "This is a note";
            // Act
            const result = validateNotesField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );

    });
    describe("validateConceptField", () => {
        it("should return false when concept is empty", () => {
            // Arrange
            const value = "";
            // Act
            const result = validateConceptField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        }
        );
        it("should return true when concept is well formed", () => {
            // Arrange
            const value = "Payment for services";
            // Act
            const result = validateConceptField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );
    });
    describe("validateAmountField", () => {
        it("should return false when amount is negative", () => {
            // Arrange
            const value = -100;
            // Act
            const result = validateAmountField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
        }
        );
        it("should return false when amount is zero", () => {
            // Arrange
            const value = 0;
            // Act
            const result = validateAmountField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
        }
        );
    })
    describe("validateNameField", () => {
        it("should return false when name is empty", () => {
            // Arrange
            const value = "";
            const result = validasteNameField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });
        it("should return true when name is well formed", () => {
            // Arrange
            const value = "John Doe";
            // Act
            const result = validasteNameField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        }
        );

        describe("validateAccountIdField", () => {
            it("should return false when accountId is empty", () => {
                // Arrange
                const value = "";
                const result = validateAccountIdField(value);
                // Assert
                expect(result.succeeded).toBeFalsy();
                expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
            });
            it("should return true when accountId is well formed", () => {
                // Arrange
                const value = "1234567890";
                // Act
                const result = validateAccountIdField(value);
                // Assert
                expect(result.succeeded).toBeTruthy();
            });
        }
        );


        describe("validateIBANField", () => {
            it("should return false when iban is empty", () => {
                // Arrange
                const value = "";
                const result = validateIBANfield(value);
                // Assert
                expect(result.succeeded).toBeFalsy();
                expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
            });
            it("should return false when iban is not well formed", () => {
                // Arrange
                const value = "ES91 2100 0418 4502 0003 1333";
                // Act
                const result = validateIBANfield(value);
                // Assert
                expect(result.succeeded).toBeFalsy();
                expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
            });
            it("should return true when iban is well formed", () => {
                // Arrange
                const value = "ES91 2100 0418 4502 0005 1332";
                // Act
                const result = validateIBANfield(value);
                // Assert
                expect(result.succeeded).toBeTruthy();
            });
        });
    });
}
);
