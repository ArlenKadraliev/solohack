import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/Product/ProductList/ProductList";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import Authorization from "./Components/Auth/Authorization";
import Basket from "./Components/Basket/Basket";
import Comment from "./Components/Comment/Comment";
import { authContext } from "./context/AuthContexProvider";
import { ADMINS } from "./helpers/consts";
import NotFound from "./Components/NotFound";

import PaymentPage from "./Components/PaymentPage/PaymentPage";
import Reg from "./Components/Reg/Reg";
import Wait from "./Components/Wait/Wait";

const MainRoutes = () => {
  const { user } = useContext(authContext);

  return (
    <Routes>
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/" element={<HomePage />} />
      {ADMINS.includes(user?.email) ? (
        <Route path="/add" element={<AddProduct />} />
      ) : (
        <></>
      )}
      <Route path="/auth" element={<Authorization />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/basket/PaymentPage" element={<PaymentPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/wait" element={<Wait />} />
    </Routes>
  );
};

export default MainRoutes;
