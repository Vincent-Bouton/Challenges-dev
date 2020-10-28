//DATE : 10/23/20

import React, { useState } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name={"description"} content={"Country quiz, flag or capital"} />
      </Head>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
