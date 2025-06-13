import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createTransferVm()
  );
  const [error, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidationResult =
      /*todo*/

      onTransfer(transfer);
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
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione cuenta origen.</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
            <option>Seleccione una cuenta</option>
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de la cuenta destino:</label>
          <input name="iban" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Beneficiario:</label>
          <input name="name" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Importe</label>
          <input type="number" name="amount" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Concepto:</label>
          <input type="concept" name="concept" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Observaciones:</label>
          <input type="notes" name="notes" onChange={handleFieldChange} />
        </div>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indiquenos la fecha de ejecución:
          </p>
          <label>Fecha de ejecución:</label>
          <input
            name="realDaleTransfer"
            type="date"
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <p>Escriba una direccion email para dar aviso al beenficiario:</p>
          <input type="email" name="email" onChange={handleFieldChange} />
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
