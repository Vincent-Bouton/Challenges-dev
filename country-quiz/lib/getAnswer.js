const getAnswer = (fourCountry) => {
  for (let i = 0; i <= 1; i++) {
    const number = Math.floor(Math.random() * fourCountry.length);
    if (fourCountry[number].country.countryCapital === "") {
      i--;
    } else {
      return fourCountry[number];
    }
  }
};

export default getAnswer;
