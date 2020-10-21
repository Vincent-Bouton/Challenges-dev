//DATE : 10/21/20
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

const index = ({ data }) => {
  const randomCountry = () => {
    return data[Math.floor(Math.random() * data.length + 1)];
  };

  const [country, useCountry] = useState(randomCountry());
  const [wrongCountries, useWrongCountries] = useState();
  console.log(country);
  return <div className={"index"}>{country.name}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default index;
