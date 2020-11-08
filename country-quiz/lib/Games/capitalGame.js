const capitalGame = (country, FourCountries, answer, state) => {
  const fourCountriesActive = FourCountries.map((element) => ({
    ...element,
    isActive: answer.id === element.id || element.id === country.id,
    disabled: true,
  }));
  state(fourCountriesActive);

};

export default capitalGame;
