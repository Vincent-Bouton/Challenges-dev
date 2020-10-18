//DATE : 10/18/20
import "../scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={"container"}>
      <Component {...pageProps} />{" "}
    </div>
  );
}
export default MyApp;
