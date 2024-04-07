import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ handleLoadMore }) {
  return (
    <button onClick={() => handleLoadMore()} className={styles.btn}>
      Load more
    </button>
  );
}
