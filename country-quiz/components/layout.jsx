//DATE : 10/23/20

import React, { useState } from "react";
import styles from "./layout.module.scss";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name={"description"} content={"Country quiz, flag or capital"} />
      </Head>

      <div className={styles.card}>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
