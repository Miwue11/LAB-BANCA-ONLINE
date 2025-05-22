import React from "react";
import logoFooter from "/assets/logo_footer.svg";
import classes from "./footer.components.module.css";

export const FooterComponents: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img className={classes.logoFooter} src={logoFooter} />
    </footer>
  );
};
