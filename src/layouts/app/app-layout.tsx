import * as React from "react";
import {
  HeaderComponents,
  NavbarComponent,
  FooterComponents,
} from "./components";
import classes from "./app-layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponents />
      <NavbarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponents />
    </>
  );
};
