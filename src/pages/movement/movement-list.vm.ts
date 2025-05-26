export interface MovementVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}
export interface AccountVm {
  iban: string;
  name: string;
  balance: string;
}
