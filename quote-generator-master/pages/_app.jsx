//DATE : 10/18/20
import "../scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={"container"}>
      <Component {...pageProps} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <a href={"https://github.com/Vincent-Risk0"}>Vincent-Risk0</a> @
          DevChallenges.io
        </p>
      </div>
    </div>
  );
}
export default MyApp;
