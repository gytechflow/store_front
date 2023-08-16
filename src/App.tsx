import "./App.module.scss";
import { Outlet } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Footer from "./components/Shell/NavigationBar/Footer/Footer";
import NavigationBar from "./components/Shell/NavigationBar/NavigationBar";
import React, { Context } from "react";
import useCustomer from "./components/Customer/api/getCustomer";
import { Customer } from "./components/Customer/Customer";

export const CustomerContext = React.createContext<Customer | undefined>(
  undefined,
);

function App() {
  const { customer } = useCustomer(10);

  return (
    <CustomerContext.Provider value={customer}>
      <div className="App">
        <NavigationBar />
        <Outlet />
        <Footer />
      </div>
    </CustomerContext.Provider>
  );
}

export default App;
