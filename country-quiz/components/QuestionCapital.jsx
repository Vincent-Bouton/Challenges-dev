//DATE : 10/28/20

import React, { useState } from "react";
import capitalGame from "../lib/Games/capitalGame";
import Button from "./Button";

const QuestionCapital = ({ fourCountries, answer, state }) => {
  const abcd = ["A", "B", "C", "D"];
  return fourCountries.map((country, index) => {
    return (
      <div
        key={country.id}
        onClick={() =>
          country.disabled
            ? ""
            : capitalGame(country, fourCountries, answer, state)
        }
        style={{ margin: ".25rem" }}
      >
        <Button
          question={true}
          isActive={country.isActive}
          isDisabled={country.disabled}
          style={country.country.countryName === answer.country.countryName}
        >
          <div>{abcd[index]}</div>
          <div>{country.country.countryName}</div>
        </Button>
      </div>
    );
  });
};

export default QuestionCapital;
