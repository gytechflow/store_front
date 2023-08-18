import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import NotFound from "./components/Error/NotFound";
import CartPage from "./pages/CartPage/CartPage";
import AddSellerPage from "./pages/SellersPage/AddSellerPage";
import SellerListPage from "./pages/SellersPage/SellersPage";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/*L'attribut index permet d'indiquer la route qui sera présente par défaut pour la route parente -->*/}
            <Route index element={<HomePage />} />
            <Route path="articles" element={<HomePage />} />

            {/*Cette route sera afficher à la place de la précédente si le path match l'url actuel*/}
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="AddSeller" element={<AddSellerPage />} />
            <Route path="sellers" element={<SellerListPage />} />
            <Route path="cart" element={<CartPage />} />
            {/* }<Route path="profile" element={<ProfilePage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

reportWebVitals();
