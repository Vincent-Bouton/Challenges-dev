//DATE : 10/18/20
import styles from "./Quote.module.scss";

const Quote = ({ quote }) => {
  return <p className={styles.quote}>{quote}</p>;
};
export default Quote;
