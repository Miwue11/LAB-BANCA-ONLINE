import { isValidIban, isPositiveNumber, isStringValueInFormed, isDateAfterToday, isEmailWellFormed } from "../validations";

describe("plainValidation", () => {
    describe("is valid iban specs", () => {
        it("should return true for a valid IBAN", () => {
            //Arrange
            const validIban = "GB82 WEST 1234 5698 7654 32";
            //Act 
            const result = isValidIban(validIban);
            //Assert
            expect(result).toBeTruthy();
        });
        it("should return false for an invalid IBAN", () => {
            //Arrange
            const invalidIban = "GB82 WEST 1234 5698 7654 33";
            //Act 
            const result = isValidIban(invalidIban);
            //Assert
            expect(result).toBeFalsy();
        });
        it("should return false for an invalid IBAN", () => {
            //Arrange
            const invalidIban = "GB82 WEST 1234 5698 7654 3";
            //Act
            const result = isValidIban(invalidIban);
            //Assert
            expect(result).toBeFalsy();
        });
    });
    describe("is positive number specs", () => {
        it("should return true for a positive number", () => {
            //Arrange
            const positiveNumber = 10;
            //Act 
            const result = isPositiveNumber(positiveNumber);
            //Assert
            expect(result).toBeTruthy();
        });
        it("should return false for a negative number", () => {
            //Arrange
            const negativeNumber = -5;
            //Act 
            const result = isPositiveNumber(negativeNumber);
            //Assert
            expect(result).toBeFalsy();
        });
        it("should return false for zero", () => {
            //Arrange
            const zero = 0;
            //Act 
            const result = isPositiveNumber(zero);
            //Assert
            expect(result).toBeFalsy();
        });
    })
    describe("is valid date after date specs", () => {
        it("should return true for a date after today", () => {
            //Arrange
            const date = new Date();
            // Act
            date.setDate(date.getDate() + 1); // Set to tomorrow
            const result = isDateAfterToday(date);
            //Assert
            expect(result).toBeTruthy();
        });
        it("should return false for a date before today", () => {
            //Arrange
            const date = new Date();
            // Act
            date.setDate(date.getDate() - 1); // Set to yesterday
            const result = isDateAfterToday(date);
            //Assert
            expect(result).toBeFalsy();
        });
        it("should return false for a date equal to today", () => {
            //Arrange
            const date = new Date();
            // Act
            const result = isDateAfterToday(date);
            //Assert
            expect(result).toBeFalsy();
        });
    });
    describe("is valid email specs", () => {
        it("should return true for a well-formed email", () => {
            //Arrange
            const email = "admin@gmail.com"
            //Act
            const result = isEmailWellFormed(email);
            //Assert
            expect(result).toBeTruthy();
        });
        it("should return false for an invalid email", () => {
            //Arrange
            const email = "admin@gmail";
            //Act
            const result = isEmailWellFormed(email);
            //Assert
            expect(result).toBeFalsy();
        }
        );
        it("should return false for an empty email", () => {
            //Arrange
            const email = "";
            //Act
            const result = isEmailWellFormed(email);
            //Assert
            expect(result).toBeFalsy();
        });
        it("should return false for an email without '@'", () => {
            //Arrange
            const email = "admingmail.com";
            //Act
            const result = isEmailWellFormed(email);
            //Assert
            expect(result).toBeFalsy();
        });
    });
    describe("is string value in formed specs", () => {
        it("should return true for a non-empty string", () => {
            //Arrange
            const value = "Hello World";
            //Act
            const result = isStringValueInFormed(value);
            //Assert
            expect(result).toBeTruthy();
        });
        it("should return false for an empty string", () => {
            //Arrange
            const value = "";
            //Act
            const result = isStringValueInFormed(value);
            //Assert
            expect(result).toBeFalsy();
        });
        it("should return false for a string with only spaces", () => {
            //Arrange
            const value = "   ";
            //Act
            const result = isStringValueInFormed(value);
            //Assert
            expect(result).toBeFalsy();
        });
    });
});

