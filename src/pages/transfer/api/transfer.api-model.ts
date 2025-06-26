export interface Account {
    id: string;
    name: string;
    balance: number;
    iban: string;
    currency: string;
    lastTransaction: string;
}

export interface Transfer {
    accountId: string;
    iban: string;
    name: string;
    amount: number;
    concept: string;
    notes: string;
    transferDate: string;
    realTransferDate: string;
}
