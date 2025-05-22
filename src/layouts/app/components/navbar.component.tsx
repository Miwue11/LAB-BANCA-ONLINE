import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  // Oculta el botón de movimientos si estás en "Mis cuentas" o "Transferencia"
  const hideMovements =
    pathname.startsWith(routesPrefixes.accountList) ||
    pathname.startsWith(routesPrefixes.transfer);

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>Mis cuentas</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencia</Link>
        </li>
        {!hideMovements && (
          <li
            className={
              pathname.startsWith(routesPrefixes.movements)
                ? classes.selected
                : ""
            }
          >
            {pathname.startsWith(routesPrefixes.movements) ? (
              <span className={classes.selected}>Movimientos</span>
            ) : (
              <Link to={appRoutes.movements.replace(":id", "1")}>
                Movimientos
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};
