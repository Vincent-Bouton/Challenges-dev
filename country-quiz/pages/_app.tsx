//DATE : 10/21/20
import type { AppProps } from "next/app";
import "./styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
