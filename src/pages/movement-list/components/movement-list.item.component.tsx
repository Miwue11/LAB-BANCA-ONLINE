import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement.-list-item.component.module.css";
export interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = ({
  movementItem,
}) => {
  const isNegative = movementItem.amount < 0;

  return (
    <div className={classes.row}>
      <span>{movementItem.transaction.toLocaleDateString()}</span>
      <span>{movementItem.realTransaction.toLocaleDateString()}</span>
      <span>{movementItem.description}</span>
      <span className={isNegative ? classes.red : undefined}>
        {movementItem.amount}
      </span>
      <span>{movementItem.balance}</span>
    </div>
  );
};
