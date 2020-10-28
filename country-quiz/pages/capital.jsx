//DATE : 10/28/20

import React, { useState } from "react";
import getCountries from "../lib/getCountries";
import getAnswer from "../lib/getAnswer";
import Button from "../components/Button";
import QuestionCapital from "../components/QuestionCapital";

const capital = ({ data }) => {
  const getNewCountries = () => {
    const newCountries = getCountries(data);
    useGetFourCountries(newCountries);
    useAnswer(getAnswer(newCountries));
  };

  const [getFourCountries, useGetFourCountries] = useState(getCountries(data));
  const [answer, useAnswer] = useState(() => getAnswer(getFourCountries));

  return (
    <div className={"capital"}>
      capital game
      <p>{answer.country.countryCapital} is the capital of :</p>
      <QuestionCapital
        fourCountries={getFourCountries}
        answer={answer}
        state={useGetFourCountries}
      />
      <div onClick={() => getNewCountries()}>
        <Button nextQuestion={true}>New game</Button>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  const capitalGame = data.map((element, index) => {
    return {
      countryName: element.name,
      countryCapital: element.capital,
      countryId: index,
    };
  });
  return {
    props: { data: capitalGame },
  };
};

export default capital;
