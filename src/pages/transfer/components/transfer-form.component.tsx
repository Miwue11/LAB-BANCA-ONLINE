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
                {account.alias} - {account.iban}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
