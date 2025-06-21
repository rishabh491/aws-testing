import React from "react";
import Main from "./common/Main";
import Headers from "./common/Headers";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <>
      <Headers/>
        <div class=" col-span-12 lg:col-span-12">
          <Main />
        </div>
      <Footer/>

    </>
  );
};

export default Layout;
