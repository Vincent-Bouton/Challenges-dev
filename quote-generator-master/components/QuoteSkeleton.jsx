//DATE : 10/18/20
import Skeleton from "./Skeleton";
import styles from "./QuoteSkeleton.module.scss";

const QuoteSkeleton = () => {
  return (
    <div className={"QuoteSkeleton"}>
      <div className={styles.title}>
        <Skeleton height={"1.7rem"} width={"30%"} />
      </div>
      <div className={styles.quote}>
        <Skeleton height={"1.1rem"} width={"100%"} margin={"21px 0 21px"} />
        <Skeleton height={"1.1rem"} width={"100%"} margin={"0 0 21px"} />
        <Skeleton height={"1.1rem"} width={"30%"} margin={"0 0 21px"} />
      </div>
    </div>
  );
};
export default QuoteSkeleton;
