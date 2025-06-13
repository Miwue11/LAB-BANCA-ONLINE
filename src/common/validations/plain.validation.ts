import validator from "validator";

export const isValidIban = (iban: string): boolean =>
    validator.isIBAN(iban);

export const isPositiveNumber = (value: number): boolean =>
    value > 0;

export const isEmailWellFormed = (email: string): boolean =>
    validator.isEmail(email);

export const isValidUrl = (url: string): boolean =>
    validator.isURL(url, {
        require_protocol: true,
        require_tld: false,
        require_valid_protocol: true,
    });

export const isDateAfterToday = (date: Date): boolean => {
    const today = new Date();
    return date > today;
}

export const isStringValueInFormed = (value: string): boolean => {
    return value !== null && value !== undefined && value.trim() !== "";
}

export const isValueNotNullOrUndifined = <T>(value: T): boolean => {
    return value !== null && value !== undefined;
}