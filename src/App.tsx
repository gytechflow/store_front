import "./App.module.scss";
import { Outlet } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Footer from "./components/Shell/NavigationBar/Footer/Footer";
import NavigationBar from "./components/Shell/NavigationBar/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
