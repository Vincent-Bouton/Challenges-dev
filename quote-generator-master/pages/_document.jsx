//DATE : 10/20/20
import Document, { Head, Html, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <meta name="Description" content={"Quote generator"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
