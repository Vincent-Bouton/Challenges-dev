//DATE : 10/17/20

import { useRouter } from "next/router";
import Quote from "../components/Quote";
import RandomButton from "../components/RandomButton";
import QuoteSkeleton from "../components/QuoteSkeleton";
import Head from "next/head";

const Author = ({ data, author }) => {
  const { isFallback } = useRouter();

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
        {quotes.map((quote) => (
          <Quote key={quote._id} quote={quote.quoteText} />
        ))}
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
    `https://quote-garden.herokuapp.com/api/v2/authors/${params.author}?page=1&limit=4`
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
