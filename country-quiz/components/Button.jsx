//DATE : 10/28/20

import Link from "next/link";
import styles from "./button.module.scss";

const Button = (props) => {
  let isGood;
  if (props.style) {
    isGood = styles.good;
  } else {
    isGood = styles.wrong;
  }

  if (props.link) {
    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  }
  if (props.question) {
    return (
      <button
        className={`${styles.button} ${props.isActive ? isGood : ""}`}
        disabled={props.isDisabled}
      >
        {props.children}
      </button>
    );
  }
  if (props.nextQuestion) {
    return <button className={styles.button}>{props.children}</button>;
  }
};
export default Button;
