import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import {
  getAccountById,
  getAliasAndIBAN,
  getMovements,
} from "../movements/api";
import { MovementListTableComponent } from "../movements/components";
import { useParams } from "react-router-dom";
import { mapMovementsFromApiToVm } from "./movement-list.mapper";
import classes from "./movement-list.module.css";

export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountBalance, setAccountBalance] = React.useState<number>(0);
  const [accountIBAN, setAccountIBAN] = React.useState<string>("");
  const [accountAlias, setAccountAlias] = React.useState<string>("");

  React.useEffect(() => {
    if (accountId) {
      getAccountById(accountId)
        .then((e) => {
          const balance = e?.data?.balance ?? 0;
          setAccountBalance(Number(balance));
        })
        .catch((err) => {
          console.error("Error obteniendo el balance:", err);
          setAccountBalance(0);
        });
      getMovements(accountId)
        .then(mapMovementsFromApiToVm)
        .then(setMovementList);

      getAliasAndIBAN(accountId).then((e) => {
        const alias = e?.data?.name ?? "";
        const iban = e?.data?.iban ?? "";
        setAccountAlias(alias);
        setAccountIBAN(iban);
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
            <span className={classes.balanceValue}>
              {accountBalance.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          </span>
        </div>
        <div className={classes.aliasIban}>
          <div className={classes.cellAliasIban}>Alias: {accountAlias}</div>
          <div className={classes.cellAliasIban}>IBAN: {accountIBAN}</div>
        </div>
        <span className={classes.movementListContainer}>
          <MovementListTableComponent movementList={movementList} />
        </span>
      </div>
    </AppLayout>
  );
};
