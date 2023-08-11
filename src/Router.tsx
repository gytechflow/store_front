import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./components/Error/NotFound";
import NavigationBar from "./components/Shell/NavigationBar/NavigationBar";
import "./Router.module.scss";

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*L'attribut index permet d'indiquer la route qui sera présente par défaut pour la route parente -->*/}
          {/* <Route index element={<HomePage />} />
                    <Route path="articles" element={<HomePage />} />
                    
                    {/*Cette route sera afficher à la place de la précédente si le path match l'url actuel*/}
          {/* <Route path="/articles/:articleId" element={<ArticlePage />} />
                    <Route path="sellers" element={<SellerHomePage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="profile" element={<ProfilePage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
