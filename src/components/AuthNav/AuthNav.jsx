import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={getNavLinkClassName} to="/register">
        Registration Page
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Login Page
      </NavLink>
    </div>
  );
};

export default AuthNav;