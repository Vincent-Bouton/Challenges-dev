//DATE : 10/28/20

import React, { useState } from "react";
import styles from "../pages/capital.module.scss";
import capitalGame from "../lib/Games/capitalGame";

const QuestionCapital = ({ fourCountries, answer, game, state }) => {
  return fourCountries.map((country) => {
    if (country.country.countryName === answer.country.countryName) {
      return (
        <button
          onClick={(e) => capitalGame(country, fourCountries, answer, state)}
          key={country.id}
          className={`${styles.button} ${
            country.isActive ? styles.good : null
          }`}
          disabled={country.disabled}
        >
          {country.country.countryName}
        </button>
      );
    }
    return (
      <button
        className={`${styles.button} ${country.isActive ? styles.wrong : null}`}
        onClick={(e) => capitalGame(country, fourCountries, answer, state)}
        key={country.id}
        disabled={country.disabled}
      >
        {country.country.countryName}
      </button>
    );
  });
};

export default QuestionCapital;
