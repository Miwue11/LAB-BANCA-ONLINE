export interface AccountVm {
    id: string;
    alias: string;
    iban: string;
}export interface TransferVm {
    accountId: string;
    amount: number;
    name: string;
    iban: string;
    concept: string;
    notes: string;
    dateTransfer: string;
    realDateTransfer?: Date;
    email: string;
}

export const createTransferVm = (): TransferVm => {
    return {
        accountId: "",
        amount: 0,
        name: "",
        iban: "",
        concept: "",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: ""
    };
}

export interface TransferError {
    accountId: string;
    amount: string;
    name: string;
    iban: string;
    concept: string;
    notes: string;
    dateTransfer: string;
    realDateTransfer: string;
    email: string;
}

export const createEmptyTransferVmError = (): TransferError => ({
    accountId: "",
    amount: "",
    name: "",
    iban: "",
    concept: "",
    notes: "",
    dateTransfer: "",
    realDateTransfer: "",
    email: ""
})

export interface FieldValidationResult {
    succeeded: boolean;
    errorMessage?: string;
}

export interface FormValidationResult {
    succeeded: boolean;
    errors: TransferError;
}