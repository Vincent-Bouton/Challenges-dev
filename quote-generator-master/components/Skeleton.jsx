//DATE : 10/19/20

import styles from "./Skeleton.module.scss";

const Skeleton = ({ children, style }) => {
  return (
    <span className={styles.skeleton} style={style}>
      {children}
    </span>
  );
};
export default Skeleton;
