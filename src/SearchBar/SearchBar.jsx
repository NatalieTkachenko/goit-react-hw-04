// === Библиотечные модули ===
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// === Стили ===
import styles from "./SearchBar.module.css";

export default function SearchBar({ handleSearch }) {
  const [SearchCriteria, setSearchCriteria] = useState("");
  const notify = () => toast("Please enter the search criteria");

  const handleChange = (event) => {
    setSearchCriteria(event.target.value.trim());
    console.log(SearchCriteria);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!SearchCriteria) {
      notify();
      return;
    } else {
      console.log("got you, looking for it");
      handleSearch(SearchCriteria);
    }
  };

  return (
    <header>
      <Toaster />
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          id="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name={SearchCriteria}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          {" "}
          Search
        </button>
      </form>
    </header>
  );
}
