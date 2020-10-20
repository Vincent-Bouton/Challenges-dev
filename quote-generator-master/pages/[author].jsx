//DATE : 10/17/20

import { useRouter } from "next/router";
import Quote from "../components/Quote";
import RandomButton from "../components/RandomButton";
import QuoteSkeleton from "../components/QuoteSkeleton";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState } from "react";

const Author = ({ data, author }) => {
  const { isFallback } = useRouter();
  const [allQuotes, useAllQuotes] = useState(false);

  if (isFallback) {
    return (
      <div>
        <Head>
          <title>Quote generator || Author</title>
        </Head>
        <RandomButton />
        <QuoteSkeleton />
      </div>
    );
  } else {
    const getQuotes = () => {
      const array = [];
      for (let i = 0; i < 4; i++) {
        array.push(quotes[i]);
      }
      return array;
    };

    const loadMore = () => {
      useAllQuotes(true);
    };

    const toggleAllQuotes = () => {
      let displayQuotes;
      if (allQuotes) {
        displayQuotes = quotes.map((quote) => {
          return <Quote key={quote._id} quote={quote.quoteText} />;
        });
      } else {
        displayQuotes = getQuotes().map((quote) => {
          return <Quote key={quote._id} quote={quote.quoteText} />;
        });
      }
      return displayQuotes;
    };

    const { quotes } = data;

    return (
      <div>
        <Head>
          <title>Quote generator || {author}</title>
        </Head>
        <RandomButton />
        <h1 style={{ paddingLeft: "100px", marginBottom: "140px" }}>
          {author}
        </h1>
        {toggleAllQuotes()}
        {!allQuotes ? <button onClick={loadMore}>Load More</button> : null}
      </div>
    );
  }
};
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params, req, res }) {
  const { author } = params;

  const response = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/authors/${params.author}?page=1&limit=10`
  );

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return { props: {} };
  }
  const data = await response.json();

  if (data) {
    return {
      props: { data: data, author: author },
    };
  }
}

export default Author;
