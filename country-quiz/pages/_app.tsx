//DATE : 10/21/20
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "./styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
