import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, MovementVm } from "./movement-list.vm";
import { getAccountById, getMovementsById } from "./api";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";
import {
  createEmptyAccount,
  mapAccountFromApiToVm,
  mapMovementsFromApiToVm,
} from "./movement-list.mapper";
import classes from "./movement-list.module.css";

export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccount);

  React.useEffect(() => {
    if (accountId) {
      Promise.all([
        getMovementsById(accountId),
        getAccountById(accountId),
      ]).then(([movements, accountData]) => {
        setMovementList(mapMovementsFromApiToVm(movements));
        setAccount(mapAccountFromApiToVm(accountData));
      });
    }
  }, [accountId]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <span className={classes.balance}>
            SALDO DISPONIBLE:{" "}
            <span className={classes.balanceValue}>{account.balance} €</span>
          </span>
        </div>
        <div className={classes.aliasIban}>
          <div className={classes.cellAliasIban}>Alias: {account.name}</div>
          <div className={classes.cellAliasIban}>IBAN: {account.iban}</div>
        </div>
        <span className={classes.movementListContainer}>
          <MovementListTableComponent movementList={movementList} />
        </span>
      </div>
    </AppLayout>
  );
};
