//DATE : 10/28/20

import React, { useState } from "react";
import capitalGame from "../lib/Games/capitalGame";
import Button from "./Button";

const QuestionCapital = ({ fourCountries, answer, state }) => {
  return fourCountries.map((country) => {
    return (
      <div
        key={country.id}
        onClick={() => capitalGame(country, fourCountries, answer, state)}
      >
        <Button
          question={true}
          isActive={country.isActive}
          isDisabled={country.disabled}
          style={country.country.countryName === answer.country.countryName}
        >
          {country.country.countryName}
        </Button>
      </div>
    );
  });
};

export default QuestionCapital;
