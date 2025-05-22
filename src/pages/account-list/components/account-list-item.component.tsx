import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

const ACCTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENT = "2";

interface Props {
  accountItem: AccountVm;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;
  const navigate = useNavigate();
  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(
          generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
        );
        break;
      case ACTION_MOVEMENT:
        navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{accountItem.iban}</span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={classes.dataCell}>{accountItem.balance}</span>
      <span className={classes.dataCell}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select
          className={classes.select}
          onChange={handleSelectedOptionChange}
        >
          <option value={ACCTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferencia</option>
          <option value={ACTION_MOVEMENT}>Movimiento</option>
        </select>
      </span>
    </div>
  );
};
