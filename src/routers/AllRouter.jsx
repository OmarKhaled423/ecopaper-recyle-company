import HomePage from "../pages/homePage/HomePage";
import AboutUsPage from "../pages/aboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/contactUsPage/ContactUsPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

import WitingPrinting from "../pages/products__writing_printing/WitingPrinting";
import PackagingBoards from "../pages/products__packaging_boards/PackagingBoards";
import SpecialityPapers from "../pages/products__speciality-papers/SpecialityPapers";
import TussuePapers from "../pages/products__tissues-papers/TussuePapers";

import Login from "../pages/Authentication-pages/loginPage/Login";
import Signup from "../pages/Authentication-pages/signupPage/Signup";
import ForgotPassword from "../pages/Authentication-pages/forgot-password/ForgotPassword";
import AdminPage from "../pages/Admin__pages/AdminPage";
import UsersData from "../pages/Admin-All-Pages/UsersData";
import SubscribersData from "../pages/Admin-All-Pages/SubscribersData";
import ProductsData from "../pages/Admin-All-Pages/ProductsData";
import Orders from "../pages/Admin-All-Pages/Orders";
import App from "../App";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsParent from "../pages/productsParentPage/ProductsParent";
import ProductsPage from "../pages/productsPage/ProductsPage";

const AllRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            {/* products routes */}
            <Route path="products" element={<ProductsPage />} />
            <Route path="writing-printing" element={<WitingPrinting />} />
            <Route path="packaging-boards" element={<PackagingBoards />} />
            <Route path="speciality-papers" element={<SpecialityPapers />} />
            <Route path="tissues-papers" element={<TussuePapers />} />

            {/* admin routes */}
            <Route path="admin" element={<AdminPage />}>
              <Route index element={<UsersData />} />
              <Route path="users" element={<UsersData />} />
              <Route path="subscribers" element={<SubscribersData />} />
              <Route path="products" element={<ProductsData />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRouter;
