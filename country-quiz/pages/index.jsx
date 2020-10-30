//DATE : 10/21/20

import Link from "next/link";
import Button from "../components/Button";

const index = () => {
  return (
    <div>
      <Button link={true} href={"/capital"}>
        Capital game
      </Button>
      <Button link={true} href={"/flag"}>
        Flag Game
      </Button>
    </div>
  );
};

export default index;
