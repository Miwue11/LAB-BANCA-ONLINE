import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components/transfer-form.component";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accountListVm = accountListApi.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);
  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    console.log("Transferencia realizada:", transfer);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia exitosa");
      } else {
        alert("Error al realizar la transferencia 1");
      }
    });
  };
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defoultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
