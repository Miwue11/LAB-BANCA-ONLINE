import {
  AccountListPage,
  LoginPage,
  MovementListPage,
  TransferPage,
  CreateAccountPage,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.createAccount} element={<CreateAccountPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
