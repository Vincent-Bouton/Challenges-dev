//DATE : 10/22/20

import React, { useState } from "react";
import getCountries from "../lib/getCountries";
import getAnswer from "../lib/getAnswer";
import styles from "../pages/capital.module.scss";

const capital = ({ data }) => {
  const getNewCountries = () => {
    const newCountries = getCountries(data);
    useGetFourCountries(newCountries);
    useAnswer(getAnswer(newCountries));
  };
  const [getFourCountries, useGetFourCountries] = useState(getCountries(data));
  const [answer, useAnswer] = useState(() => getAnswer(getFourCountries));
};
export default capital;
