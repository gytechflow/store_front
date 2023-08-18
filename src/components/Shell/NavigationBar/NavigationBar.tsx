import React, { useContext } from "react";

import styles from "./NavigationBar.module.scss";
import { NavLink } from "react-router-dom";
import {
  CartFill,
  Grid3x3GapFill,
  PeopleFill,
  PersonFill,
} from "react-bootstrap-icons";
import { CustomerContext } from "../../../App";
import logo from "./takima_logo.png";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? "#e2E2E210" : "",
  borderRadius: "10px",
  padding: "5px",
});

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar} style={{ minWidth: "100%" }}>
      <div>
        <NavLink to="/" style={linkStyle}>
          <img alt="logo" src={logo} width="35" />
        </NavLink>
        <NavLink to="/articles" style={linkStyle}>
          <div className={styles.linkElement}>
            <Grid3x3GapFill className="mr-2" />
            <span>Articles</span>
          </div>
        </NavLink>
        <NavLink to="/sellers" style={linkStyle}>
          <div className={styles.linkElement}>
            <PeopleFill className="mr-2" />
            <span>Sellers</span>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/cart" style={linkStyle}>
          <div className={styles.linkElement}>
            <CartFill />
          </div>
        </NavLink>
        <NavLink to="/profile" style={linkStyle}>
          <div className={styles.linkElement}>
            <PersonFill className="mr-3" />
            <CustomerContext.Consumer>
              {(customer) => {
                return <span className="pl-1">{customer?.firstname}</span>;
              }}
            </CustomerContext.Consumer>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
