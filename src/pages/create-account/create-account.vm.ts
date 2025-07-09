export interface Account {
    type: string;
    name: string;
}

export interface AccountError {
    type: string;
    name: string;
}

export interface CreateAccountVm {
    account: Account;
    errors: AccountError;
}


