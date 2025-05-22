import * as apiModel from "./api/account-list.api.model";
import * as viewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  AccountList: apiModel.Account[]
): viewModel.AccountVm[] =>
  AccountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));
