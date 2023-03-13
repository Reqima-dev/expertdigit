import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import "../../styles/layout.css";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="containerLayout">
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
