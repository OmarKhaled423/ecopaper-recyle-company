import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import HomePage from "../pages/homePage/HomePage";
import ProductPage from "../pages/productsPage/ProductsPage";
import WitingPrinting from "../pages/products__writing_printing/WitingPrinting";
import PackagingBoards from "../pages/products__packaging_boards/PackagingBoards";
import SpecialityPapers from "../pages/products__speciality-papers/SpecialityPapers";
import TussuePapers from "../pages/products__tissues-papers/TussuePapers";

import AboutUsPage from "../pages/aboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/contactUsPage/ContactUsPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

import Login from "../pages/Authentication-pages/loginPage/Login";
import Signup from "../pages/Authentication-pages/signupPage/Signup";
import ForgotPassword from "../pages/Authentication-pages/forgot-password/ForgotPassword";
import AdminPage from "../pages/Admin__pages/AdminPage";
import UsersData from "../pages/Admin-All-Pages/UsersData";
import SubscribersData from "../pages/Admin-All-Pages/SubscribersData";
import ProductsData from "../pages/Admin-All-Pages/ProductsData";
import Orders from "../pages/Admin-All-Pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },

      // products routes
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "writing-printing",
        element: <WitingPrinting />,
      },
      {
        path: "packaging-boards",
        element: <PackagingBoards />,
      },
      {
        path: "speciality-papers",
        element: <SpecialityPapers />,
      },
      {
        path: "tissues-papers",
        element: <TussuePapers />,
      },
      // admin routes
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          {
            path: "",
            element: <UsersData />,
          },
          {
            path: "users",
            element: <UsersData />,
          },
          {
            path: "subscribers",
            element: <SubscribersData />,
          },
          {
            path: "products",
            element: <ProductsData />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

export default router;

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHeader />} />
          <Route index path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/all_tissue_paper" element={<AllTissuePaper />} />
          <Route path="/all_writing_paper" element={<AllWritingPaper />} />
          <Route path="/all_printing_paper" element={<AllPrintingPaper />} />
          <Route path="/all_colourful_paper" element={<AllColourfulPaper />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> */
}
