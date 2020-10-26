//DATE : 10/22/20

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getCountries from "../lib/getCountries";
import getAnswer from "../lib/getAnswer";
import styles from "./capital.module.scss";

const capital = ({ data }) => {
  const getNewCountries = () => {
    const newCountries = getCountries(data);
    useGetFourCountries(newCountries);
    useAnswer(getAnswer(newCountries));
  };
  const [getFourCountries, useGetFourCountries] = useState(getCountries(data));
  const [answer, useAnswer] = useState(() => getAnswer(getFourCountries));

  const question = getFourCountries.map((country) => {
    const uuid = uuidv4();
    if (country.country.name === answer.country.name) {
      return (
        <button
          onClick={(e) => game(country, e)}
          key={uuid}
          id={"good"}
          className={`${styles.button} ${
            country.isActive ? styles.good : null
          }`}
        >
          {country.country.name}
        </button>
      );
    }

    return (
      <button
        className={`${styles.button} ${country.isActive ? styles.wrong : null}`}
        onClick={(e) => game(country, e)}
        key={uuid}
      >
        {country.country.name}
      </button>
    );
  });
  const game = (country) => {
    console.log(answer.id);
    const fourCountriesActive = getFourCountries.map((element) => ({
      ...element,
      isActive: answer.id === element.id || element.id === country.id,
    }));
    useGetFourCountries(fourCountriesActive);
  };

  return (
    <div className={"capital"}>
      capital game
      <p>{answer.capital} is the capital of :</p>
      {question}
      <button onClick={() => getNewCountries()} className={styles.button}>
        New game
      </button>
    </div>
  );
};
export default capital;
