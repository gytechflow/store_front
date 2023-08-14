import "./App.module.scss";
import Router from "./Router";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Footer from "./components/Shell/NavigationBar/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
