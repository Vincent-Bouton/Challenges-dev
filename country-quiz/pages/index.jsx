//DATE : 10/21/20

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Capital from "../components/capital";

const index = ({ data }) => {
  const [game, useGame] = useState();

  switch (game) {
    case "capital":
      return <Capital data={data} />;
    case "flag":
      return <p>coming soon</p>;
    default:
      return (
        <div>
          <button onClick={() => useGame("capital")}>Capital</button>
          <button onClick={() => useGame("flag")}>Flag</button>
        </div>
      );
  }
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default index;
