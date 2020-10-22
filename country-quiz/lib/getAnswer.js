const getAnswer = (fourCountry) => {
  const number = Math.floor(Math.random() * fourCountry.length);
  return fourCountry[number];
};

export default getAnswer;
