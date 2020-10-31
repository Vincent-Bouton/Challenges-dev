//DATE : 10/21/20

import Link from "next/link";
import Button from "../components/Button";

const index = () => {
  return (
    <div>
      <Link link={true} href={"/capital"}>
        <a>Capital game</a>
      </Link>
      <Link link={true} href={"/flag"}>
        <a> flag Game</a>
      </Link>
    </div>
  );
};

export default index;
