//DATE : 10/18/20

import React, { useState } from "react";
import Link from "next/link";
import styles from "./RandomButton.module.scss";

const RandomButton = (props) => {
  const nextQuote = (useState) => {
    props.onClick(useState);
  };
  if (!props.onClick) {
    return (
      <div className={styles.content}>
        <Link href={"/"}>
          <a className={styles.random}>
            <button className={styles.button}>random</button>
            <img
              className={styles.icon}
              src="./autorenew-24px.svg"
              alt="Random quote"
            />
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.content}>
      <div onClick={() => nextQuote(props.state)} className={styles.random}>
        <button className={styles.button}>random</button>
        <img
          className={styles.icon}
          src="./autorenew-24px.svg"
          alt="Random quote"
        />
      </div>
    </div>
  );
};
export default RandomButton;
