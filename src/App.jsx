// === Библиотечные модули ===
import { useState, useEffect } from "react";
import axios from "axios";

// ===Компоненты проекта===
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [showPhotos, setShowPhotos] = useState([]);

  // const [page, setPage] = useState("");

  const API_KEY = "S1N3fDA23y_hQUTZth1WPkovmsIIT0wVqJFI2s7qIiI";

  const instance = axios.create({
    baseURL: "https://api.unsplash.com/",
  });

  const handleSearchTerm = (queryTerm) => {
    console.log("queryTerm:", queryTerm);
    setQuery(queryTerm);
    fetchPhotos(query);
  };

  const fetchPhotos = async (query) => {
    try {
      const response = await instance.get(
        `/photos/?client_id=${API_KEY}&query=${query}`,
      );
      console.log(response.data);
      response.data.map(({ id, urls: { small, regular }, description }) => {
        const Image = {
          id: { id },
          small: { small },
          regular: { regular },
          description: {description},
        };
        console.log(Image);
        setShowPhotos((prevShowPhotos) => [...prevShowPhotos, Image]);
      });

      console.log(showPhotos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar handleSearch={handleSearchTerm} />
      {/* <Loader />
       */}
      <ImageGallery
        gallery={showPhotos} />
      <ErrorMessage />
      <LoadMoreButton />
    </>
  );
}

export default App;
