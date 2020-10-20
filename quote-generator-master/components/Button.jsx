//DATE : 10/20/20
import styles from "./Button.module.scss";

const Button = ({ onClick, children, state }) => {
  const loadMore = (state) => {
    onClick(state);
  };
  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={() => loadMore(state)}>
        {children}
      </button>
    </div>
  );
};
export default Button;
