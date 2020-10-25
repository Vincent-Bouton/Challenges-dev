//DATE : 10/22/20

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getCountries from "../lib/getCountries";
import getAnswer from "../lib/getAnswer";
import styles from "./capital.module.scss";

const capital = ({ data }) => {
  const getNewCountries = () => {
    const newCountries = getCountries(data);
    useFourCountry(newCountries);
    useAnswer(getAnswer(newCountries));
  };
  const [fourCountry, useFourCountry] = useState(getCountries(data));
  const [answer, useAnswer] = useState(() => getAnswer(fourCountry));

  const question = fourCountry.map((country) => {
    const uuid = uuidv4();
    if (country.name === answer.name) {
      return (
        <button onClick={(e) => game(country, e)} key={uuid} id={"good"}>
          {country.name}
        </button>
      );
    }

    return (
      <button onClick={(e) => game(country, e)} key={uuid}>
        {country.name}
      </button>
    );
  });

  return (
    <div className={"capital"}>
      capital game
      <p>{answer.capital} is the capital of :</p>
      {question}
      <button onClick={() => getNewCountries()}>New game</button>
    </div>
  );
};
export default capital;
