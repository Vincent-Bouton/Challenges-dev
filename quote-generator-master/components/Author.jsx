//DATE : 10/19/20

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Author.module.scss";

const Author = ({ genre, author }) => {
  return (
    <div className={styles.box}>
      <Link href={"/[author]"} as={`/${author}`}>
        <a>
          <p className={styles.author}>{author}</p>
          <p className={styles.genre}>{genre}</p>
        </a>
      </Link>
    </div>
  );
};
export default Author;
