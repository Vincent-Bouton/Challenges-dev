//DATE : 10/19/20

import styles from "./Skeleton.module.scss";

const Skeleton = ({ children, height, width, margin }) => {
  return (
    <span
      className={styles.skeleton}
      style={{ height: height, width: width, margin: margin }}
    >
      {children}
    </span>
  );
};
export default Skeleton;
