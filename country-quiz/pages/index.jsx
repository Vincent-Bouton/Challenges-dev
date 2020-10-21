//DATE : 10/21/20
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const index = ({ data }) => {
  const randomCountries = () => {
    const arrayCountry = [];
    const arrayNumbers = [];
    for (let i = 0; i < 4; i++) {
      const number = Math.floor(Math.random() * data.length + 1);
      console.log(number);
      const country = data[number];

      if (country && arrayNumbers[i - 1] !== number) {
        arrayCountry.push(country);
        arrayNumbers.push(number);
      } else {
        i--;
      }
    }
    return arrayCountry;
  };
  const randomAnswer = (array) => {
    const number = Math.floor(Math.random() * fourCountry.length);
    console.log(number + " Answer");
    return array[number];
  };
  const newCountries = () => {
    const newCountries = randomCountries();
    useFourCountry(newCountries);
    useAnswer(randomAnswer(newCountries));
  };

  const [fourCountry, useFourCountry] = useState(randomCountries);
  const [answer, useAnswer] = useState(() => randomAnswer(fourCountry));

  console.log(answer);
  return (
    <div className={"index"}>
      <p>{answer.capital} is the capital of :</p>
      {fourCountry.map((country) => {
        return <p key={uuidv4()}>{country.name}</p>;
      })}
      <button onClick={() => newCountries()}>New countries</button>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default index;
