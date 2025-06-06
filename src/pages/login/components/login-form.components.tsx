import React from "react";
import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}
export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
          placeholder="Usuario"
          className={errors.user ? classes.inputError : ""}
        ></input>
        {errors.user && <p className={classes.error}>{errors.user}</p>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFieldChange}
          placeholder="Contraseña"
          className={errors.password ? classes.inputError : ""}
        />
        {errors.password && <p className={classes.error}>{errors.password}</p>}
        <button type="submit" className={classes.btnEnviar}>
          Acceder
        </button>
      </div>
    </form>
  );
};
