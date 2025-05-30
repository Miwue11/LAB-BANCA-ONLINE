import React from "react";
import { AccountVm, createTransferVm, TransferVm } from "../transfer.vm";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer /*setTransfer*/] = React.useState<TransferVm>(
    createTransferVm()
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onTransfer(transfer);
  };
  return (
    <div>
      {" "}
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione cuenta origen.</label>
          <select>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de la cuenta destino:</label>
          <input />
        </div>
        <div>
          <label>Beneficiario:</label>
          <input />
        </div>
        <div>
          <label>Importe</label>
          <input type="number" />
        </div>
        <div>
          <label>Concepto:</label>
          <input type="concept" />
        </div>
        <div>
          <label>Observaciones:</label>
          <input type="notes" />
        </div>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indiquenos la fecha de ejecución:
            <label>Fecha de ejecución</label>
            <input name="realDaleTransfer" type="date" />
          </p>
        </div>
        <div>
          <p>Escriba una direccion email para dar aviso al beenficiario:</p>
          <input type="email" />
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
