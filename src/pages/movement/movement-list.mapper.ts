import { Account, Movement } from "./api/movement.api-model";
import { AccountVm, MovementVm } from "./movement-list.vm";

export const mapMovementsFromApiToVm = (apiList: Movement[]): MovementVm[] =>
  apiList.map((m) => ({
    id: m.id,
    description: m.description,
    amount: m.amount,
    balance: m.balance,
    accountId: m.accountId,
    transaction: new Date(m.transaction),
    realTransaction: new Date(m.realTransaction),
  }));

export const mapAccountFromApiToVm = (apiAccount: Account): AccountVm => ({
  iban: apiAccount.iban,
  name: apiAccount.name,
  balance: apiAccount.balance.toFixed(2),
});
export const createEmptyAccount = (): AccountVm => ({
  iban: "",
  name: "",
  balance: "",
});
