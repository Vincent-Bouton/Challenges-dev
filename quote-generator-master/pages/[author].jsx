//DATE : 10/17/20

import { useRouter } from "next/router";
import Quote from "../components/Quote";
import RandomButton from "../components/RandomButton";

const Author = (props) => {
  const { isFallback } = useRouter();
  // const { quoteText } = props.data.quotes;
  if (isFallback) {
    console.log("true" + props.data);
    return <RandomButton />;
  } else {
    console.log("false" + props.data);
    return <RandomButton />;
  }
  console.log(props.data);
  // if (props.data.quotes.length === 0) {
  //   return <p>No quote there</p>;
  // }

  // return (
  //   <div className={"container"}>
  //     <RandomButton />
  //     <h1></h1>
  //     {/*{props.data.quotes.map((quote) => (*/}
  //     {/*  <Quote quote={quote.quoteText} />*/}
  //     {/*))}*/}
  //   </div>
  // );
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
      props: { data },
    };
  }
}

export default Author;
