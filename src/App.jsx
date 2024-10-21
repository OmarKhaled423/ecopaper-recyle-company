import { Outlet } from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </Fragment>
  );
}

export default App;
