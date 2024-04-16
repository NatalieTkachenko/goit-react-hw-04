// === Библиотечные модули ===
import { useState, useEffect } from "react";

// ===Компоненты проекта===
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";

// === Services ===
import fetchData from "./services/API";

function App() {
  const [photosToShow, setPhotosToShow] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [total_pages, setTotal_pages] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState({});

  const handleQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPhotosToShow([]);
    setPage(1);
  };

  const handleSearchPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!query) return;

    const asyncWrapper = async (query, page) => {
      try {
        const response = await fetchData(query, page);
        

        setTotal_pages(response.total_pages);
        setPhotosToShow((prev) => [...prev, ...response.results]);
      } catch (error) {
        setError("true");
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper(query, page);
  }, [query, page]);

  // === Управление модальным окном ===
  const openModal = (bigImage) => {
    setIsOpen(true);
    setBigImage(bigImage);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {Array.isArray(photosToShow) && (
        <ImageGallery gallery={photosToShow} handleModal={openModal} />
      )}

      {page < total_pages && (
        <LoadMoreButton handleLoadMore={handleSearchPage} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={bigImage}
        />
      )}
    </>
  );
}

export default App;
