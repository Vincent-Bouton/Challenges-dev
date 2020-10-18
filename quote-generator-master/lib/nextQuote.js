export default async function nextQuote(useState) {
  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/quotes/random`
  );
  const data = await res.json();
  useState(data.quote);
}
