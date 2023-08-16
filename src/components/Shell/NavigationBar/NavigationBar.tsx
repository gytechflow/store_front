import React, { useContext } from "react";

import styles from "./NavigationBar.module.scss";
import { NavLink } from "react-router-dom";
import { Cart3, Grid3x3Gap, People, Person } from "react-bootstrap-icons";
import { CustomerContext } from "../../../App";

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
          <img alt="" src={"/takima_logo.png"} width="35" />
        </NavLink>
        <NavLink to="/" style={linkStyle}>
          <div className={styles.linkElement}>
            <Grid3x3Gap className="mr-2" />
            <span>Articles</span>
          </div>
        </NavLink>
        <NavLink to="/sellers" style={linkStyle}>
          <div className={styles.linkElement}>
            <People className="mr-2" />
            <span>Sellers</span>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/cart" style={linkStyle}>
          <div>
            <Cart3 />
            <div className="pl-6">Cart</div>
          </div>
        </NavLink>
        <NavLink to="/profile" style={linkStyle}>
          <div>
            <Person></Person>
            <CustomerContext.Consumer>
              {(customer) => {
                return <div className="pl-1">{customer?.firstname}</div>;
              }}
            </CustomerContext.Consumer>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
