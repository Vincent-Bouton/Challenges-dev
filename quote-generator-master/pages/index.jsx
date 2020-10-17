//DATE : 10/16/20
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Index = ({ data }) => {
  const nextQuoteFunction = async () => {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/quotes/random`
    );
    const data = await res.json();

    return { data };
  };
  const nextQuote = async () => {
    const quote = await nextQuoteFunction();
    console.log(quote.data);

    useQuote(quote.data.quote);
  };

  const [quote, useQuote] = useState(data.quote);

  const router = useRouter();
  return (
    <div className={"index"}>
      <button onClick={() => nextQuote()}>random</button>
      <p>{quote.quoteText}</p>
      <div>
        <Link href={"/[author]"} as={`/${quote.quoteAuthor}`}>
          <a>
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteGenre}</p>
          </a>
        </Link>
      </div>
    </div>
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
