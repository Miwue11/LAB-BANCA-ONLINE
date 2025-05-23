import { Movement } from "../movement-components/api/movement.api-model";
import { MovementVm } from "./movement-list.vm";

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
