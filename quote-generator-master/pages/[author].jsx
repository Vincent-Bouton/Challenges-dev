//DATE : 10/17/20

import { useRouter } from "next/router";

const Author = (props) => {
  console.log(props.data);
  let quotes;
  if (props.data.quotes.length === 0) {
    quotes = <p>No quote there</p>;
  } else {
    quotes = (
      <p>
        {props.data.quotes.map((quote) => (
          <p>{quote.quoteText}</p>
        ))}
      </p>
    );
  }
  return <div className={"author"}>{quotes}</div>;
};
export async function getServerSideProps({ params, req, res }) {
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
  return {
    props: { data },
  };
  // if (data) {
  //   return {
  //     props: { author: data },
  //   };
  // }
}

//
//
//   const { data } = await response.json();
//
//   if (data) {
//     return {
//       props: { author: data },
//     };
//   }
// }
//
export default Author;
