import React from "react";
import { saveAccount } from "../api/account.api";
import classes from "./create-account.form.module.css";
export const CreateAccountFormComponent: React.FC = () => {
  const [account, setAccount] = React.useState({
    type: "",
    name: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Cuenta creada:", account);
    saveAccount(account)
      .then((result) => {
        if (result) {
          alert("Cuenta creada exitosamente");
        } else {
          alert("Error al crear la cuenta");
        }
      })
      .catch((error) => {
        console.error("Error al crear la cuenta:", error);
        alert("Error al crear la cuenta");
      });
  };
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <div className={classes.divContainer}>
        <div className={classes.formGroup1}>
          <label className={classes.formLabel}>Tipo de Cuenta:</label>
          <select
            name="type"
            value={account.type}
            onChange={handleSelectChange}
          >
            <option value="">Seleccione un tipo de cuenta</option>
            <option value="Ahorros">Ahorros</option>
            <option value="Corriente">Corriente</option>
            <option value="Inversiones">Inversiones</option>
          </select>
        </div>
        <div className={classes.formGroup2}>
          <label className={classes.formLabel}>Alias:</label>
          <input
            type="text"
            name="name"
            value={account.name}
            onChange={handleFieldChange}
          />
        </div>
      </div>
      <button className={classes.button} type="submit">
        Guardar
      </button>
    </form>
  );
};
