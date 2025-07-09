import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";

import { validateForm } from "../validations";

import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createTransferVm()
  );
  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? "",
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta origen.</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option>Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Ingrese el IBAN de la cuenta destino:</label>
            <input
              name="iban"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiario:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Importe</label>
            <input
              type="number"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concepto:</label>
            <input
              type="concept"
              name="concept"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observaciones:</label>
            <input
              type="notes"
              name="notes"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor, indiquenos la fecha de ejecución:
            </p>
            <div>
              <label>Fecha de ejecución:</label>
              <input
                name="realDaleTransfer"
                type="date"
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>Escriba una direccion email para dar aviso al beenficiario:</p>
            <input
              type="email"
              name="email"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <button className={classes.buttonForm} type="submit">
          REALIZAR LA TRANSFERENCIA
        </button>
      </form>
    </div>
  );
};
