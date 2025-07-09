import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.module.css";
import { CreateAccountFormComponent } from "./components/create-account-form.components";

export const CreateAccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent />
      </div>
    </AppLayout>
  );
};
