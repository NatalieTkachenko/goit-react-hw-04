// === Библиотечные модули ===
import Modal from "react-modal";

// === Стили ===
import styles from "./ImageModal.module.css";

Modal.setAppElement("#modal-root");

export default function ImageModal({ isOpen, onRequestClose, image }) {
  const {
    description,
    urls: { regular },
  } = image;

  // margin: 10% auto; /* Отступы по верху и снизу, центрирование по горизонтали */
  //   padding: 20px;
  //   background-color: #fefefe; /* Цвет фона контейнера */
  //   border: 1px solid #888;
  //   width: 80%; /* Ширина контейнера */
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Тень */

  return (
    <Modal
      style={{
        overlay: {
          width: "100%vw",
          height: "100%vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "rgba(0, 0,0, 0.8)",
        },
        content: {
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          height: "90%",
          padding: "0",
          border: "none",
          overflow: "hidden",
          borderRadius: "4px",
          outline: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      contentLabel={description}
      preventScrolling={true}
      preventScroll={true}
    >
      <img className={styles.modalImage} src={regular} alt="Seleted image" />
    </Modal>
  );
}
