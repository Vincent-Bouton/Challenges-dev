//DATE : 10/21/20

import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href={"/capital"}>
        <a>Capital Game</a>
      </Link>
      <Link href={"/flag"}>
        <a>Flag Game</a>
      </Link>
    </div>
  );
};

export default index;
