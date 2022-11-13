import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductList from "../Pages/Products/ProductList";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Error/Error";
import ProductListByCity from "../Pages/Products/ProductListByCity";
import ReqAuth from "../Pages/Login/ReqAuth"
import PhoneOtp from "../Pages/Signup/PhoneOtp";

import PropertyPageOne from "../Pages/AddProperty/PropertyPageOne";
import PropertyPageTwo from "../Pages/AddProperty/PropertyPageTwo";
import PropertyPageThree from "../Pages/AddProperty/PropertyPageThree";
import PropertyPageFour from "../Pages/AddProperty/PropertyPageFour";
import PropertyPageFive from "../Pages/AddProperty/PropertyPageFive";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      {/* <Route path="/products/:sortBy" element={<ReqAuth><ProductListByCity /></ReqAuth>} /> */}
      <Route path="/products/:id" element={<ReqAuth><SingleProduct /></ReqAuth>} />
      <Route path="/addproperty-form-1" element={<PropertyPageOne />} />
      <Route path="/addproperty-form-2" element={<PropertyPageTwo />} />
      <Route path="/addproperty-form-3" element={<PropertyPageThree />} />
      <Route path="/addproperty-form-4" element={<PropertyPageFour />} />
      <Route path="/addproperty-form-5" element={<PropertyPageFive />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/phoneOtp" element={<PhoneOtp/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
