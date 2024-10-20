
import { Outlet } from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";

// import HomePage from "./pages/homePage/HomePage";
// import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
// import ProductsPage from "./pages/productsPage/ProductsPage";
// import EventsPage from "./pages/eventsPage/EventsPage";
// import ContactUsPage from "./pages/contactUsPage/ContactUsPage";
// import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
// import AllTissuePaper from "./pages/allTissuePaper/AllTissuePaper";
// import AllWritingPaper from "./pages/allTissuePaper/AllWritingPaper";
// import AllPrintingPaper from "./pages/allTissuePaper/AllPrintingPaper";
// import AllColourfulPaper from "./pages/allTissuePaper/AllColourfulPaper";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
