import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
export const UserContext = createContext();

const AdminPage = () => {
  const IsActiveStyle = {
    background: "#000",
    paddingInline: "10px",
    paddingBlock: "6px",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
  };
  const InActiveStyle = {
    background: "skyblue",
    color: "#000",
    paddingInline: "10px",
    paddingBlock: "6px",
    marginInlineEnd: "1px",
    cursor: "pointer",
    userSelect: "none",
  };
  // ============================================================
  // style end here
  // =============================================================

  const URL = "http://localhost:4000/api";

  const [UserData, setUserData] = useState([]);
  const [LoadingUserData, setLoadingUserData] = useState(false);
  const [ProductData, setProductData] = useState([]);
  const [LoadingProductData, setLoadingProductData] = useState(false);
  const [CartData, setCartData] = useState([]);
  const [LoadingCartData, setLoadingCartData] = useState(false);

  const fetchUserData = async (url) => {
    setLoadingUserData(false);
    const response = await fetch(`${url}/user/all`);
    const userdata = await response.json();

    if (userdata) {
      setUserData(userdata.users);
    }
    setTimeout(() => {
      setLoadingUserData(true);
    }, 1000);
  };

  const fetchProductData = async (url) => {
    setLoadingProductData(false);
    const response = await fetch(`${url}/product/all`);
    const productdata = await response.json();

    if (productdata) {
      setProductData(productdata.products);
    }

    setTimeout(() => {
      setLoadingProductData(true);
    }, 1000);
  };

  const fetchCartData = async (url) => {
    setLoadingCartData(false);
    const response = await fetch(`${url}/admin/allcarts`);
    const cartdata = await response.json();

    if (cartdata) {
      // setCartData(cartdata);
      setCartData(cartdata.userCart);
    }

    setTimeout(() => {
      setLoadingCartData(true);
    }, 1000);
  };

  useEffect(() => {
    fetchUserData(URL);
    fetchProductData(URL);
    fetchCartData(URL);
  }, [URL]);

  console.log(ProductData);
  return (
    <div
      style={{
        minHeight: "70vh",
        background: "#ffffff",
        paddingInline: "2rem",
        paddingBlock: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <nav style={{ paddingBlock: "1rem" }}>
          <NavLink
            style={({ isActive }) => (isActive ? IsActiveStyle : InActiveStyle)}
            to="users"
          >
            <span className="">Users Data</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? IsActiveStyle : InActiveStyle)}
            to="subscribers"
          >
            <span className="">Subsciber</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? IsActiveStyle : InActiveStyle)}
            to="products"
          >
            <span className="">Products</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? IsActiveStyle : InActiveStyle)}
            to="orders"
          >
            <span className="">Orders</span>
          </NavLink>
        </nav>
        <div>
          <span
            onClick={() => {
              location.reload();
            }}
            style={IsActiveStyle}
          >
            Refresh Page
          </span>
        </div>
      </div>

      <div>
        <UserContext.Provider
          value={{
            user: [UserData, LoadingUserData],
            product: [ProductData, LoadingProductData],
            cart: [CartData, LoadingCartData],
          }}
        >
          <Outlet />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default AdminPage;
