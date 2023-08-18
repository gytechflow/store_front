import "./App.module.scss";
import { Outlet } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Footer from "./components/Shell/NavigationBar/Footer/Footer";
import NavigationBar from "./components/Shell/NavigationBar/NavigationBar";
import React, { Context } from "react";
import useCustomer from "./components/Customer/api/getCustomer";
import { Customer } from "./components/Customer/Customer";
import { createStore } from "redux";
// import store from "./stores/store.ts";
import { setupStore, setupStorePersist } from "./stores/redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const store = setupStore;
export const CustomerContext = React.createContext<Customer | undefined>(
  undefined,
);

function App() {
  const { customer } = useCustomer(10);

  return (
    <div className="App d-flex align-items-start  vh-100 flex-wrap">
      <Provider store={store}>
        <PersistGate loading={null} persistor={setupStorePersist}>
          <CustomerContext.Provider value={customer}>
            <div className="" style={{ minWidth: "100%" }}>
              <NavigationBar />
            </div>
            <div style={{ minWidth: "100%" }}>
              <Outlet />
            </div>
            <div id="footer" className="mt-auto w-100">
              <Footer />
            </div>
          </CustomerContext.Provider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
