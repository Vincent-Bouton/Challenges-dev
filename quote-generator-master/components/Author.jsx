//DATE : 10/19/20

import React, { useState } from "react";
import Link from "next/link";

const Author = ({ genre, author }) => {
  return (
    <div className={"Author"}>
      <Link href={"/[author]"} as={`/${author}`}>
        <a>
          <p>{author}</p>
          <p>{genre}</p>
        </a>
      </Link>
    </div>
  );
};
export default Author;
