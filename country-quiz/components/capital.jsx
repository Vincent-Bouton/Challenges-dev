//DATE : 10/22/20

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getCountries from "../lib/getCountries";
import getAnswer from "../lib/getAnswer";

const capital = ({ data }) => {
  const getNewCountries = () => {
    const newCountries = getCountries(data);
    useFourCountry(newCountries);
    useAnswer(getAnswer(newCountries));
  };
  const [fourCountry, useFourCountry] = useState(getCountries(data));
  const [answer, useAnswer] = useState(() => getAnswer(fourCountry));
  const [answerCss, useAnswerCss] = useState();

  const game = (answer) => {
    answer
      ? useAnswerCss({ background: "green" })
      : useAnswerCss({ background: "red" });
    console.log(answer);
  };
  return (
    <div className={"capital"}>
      capital game
      <p>{answer.capital} is the capital of :</p>
      {fourCountry.map((country) => {
        if (country.name === answer.name) {
          return (
            <p onClick={() => game(true)} key={uuidv4()} style={answerCss}>
              {country.name}
            </p>
          );
        }
        return (
          <p onClick={() => game(false)} key={uuidv4()} style={answerCss}>
            {country.name}
          </p>
        );
      })}
      <button onClick={() => getNewCountries()}>New game</button>
    </div>
  );
};
export default capital;
