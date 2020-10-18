//DATE : 10/16/20
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Quote from "../components/Quote";
import RandomButton from "../components/RandomButton";
import nextQuote from "../lib/nextQuote";
import Author from "../components/Author";

const Index = ({ data }) => {
  const [quote, useQuote] = useState(data.quote);
  const router = useRouter();
  return (
    <main className={"container"}>
      <RandomButton onClick={nextQuote} state={useQuote} />
      <Quote quote={quote.quoteText} />
      <Author author={quote.quoteAuthor} genre={quote.quoteGenre} />
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/quotes/random`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Index;
