import React from "react";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "../api/account.api";
import classes from "./create-account.form.module.css";
import { AccountError } from "../create-account.vm";
import {
  isStringValueInFormed,
  isValueNotNullOrUndifined,
} from "@/common/validations";
import { appRoutes } from "@/core/router/routes";

export const CreateAccountFormComponent: React.FC = () => {
  const navigate = useNavigate();

  const [account, setAccount] = React.useState({
    type: "",
    name: "",
  });

  const [errors, setErrors] = React.useState<AccountError>({
    type: "",
    name: "",
  });
  React.useEffect(() => {
    setAccount({
      type: "",
      name: "",
    });
  }, []);
  const validateForm = () => {
    const newErrors: AccountError = {
      type: "",
      name: "",
    };
    if (
      !isValueNotNullOrUndifined(account.type) ||
      account.type.trim() === ""
    ) {
      newErrors.type = "Debe seleccionar un tipo de cuenta";
    }
    if (!isStringValueInFormed(account.name)) {
      newErrors.name = "El alias es obligatorio";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Cuenta creada:", account);
    saveAccount(account)
      .then((result) => {
        if (result) {
          alert("Cuenta creada exitosamente");

          setAccount({
            type: "",
            name: "",
          });
          setErrors({
            type: "",
            name: "",
          });

          navigate(appRoutes.accountList);
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
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });

    if (errors[name as keyof AccountError]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });

    if (errors[name as keyof AccountError]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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
            className={errors.type ? classes.inputError : ""}
            required
          >
            <option value="" disabled>
              Seleccione un tipo de cuenta
            </option>
            <option value="Ahorros">Ahorros</option>
            <option value="Corriente">Corriente</option>
            <option value="Inversiones">Inversiones</option>
          </select>
          {errors.type && (
            <span className={classes.errorMessage}>{errors.type}</span>
          )}
        </div>
        <div className={classes.formGroup2}>
          <label className={classes.formLabel}>Alias:</label>
          <input
            type="text"
            name="name"
            value={account.name}
            onChange={handleFieldChange}
            className={errors.name ? classes.inputError : ""}
          />
          {errors.name && (
            <span className={classes.errorMessage}>{errors.name}</span>
          )}
        </div>
      </div>
      <button className={classes.button} type="submit">
        Guardar
      </button>
    </form>
  );
};
