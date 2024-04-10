// === Библиотечные модули ===
import Modal from "react-modal";

// === Стили ===
import styles from "./ImageModal.module.css";

Modal.setAppElement("#modal-root");

const customStyles = {
  content: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    // zIndex: "1200",
  },
};

export default function ImageModal({ isOpen, onRequestClose, image }) {
  const {
    description,
    urls: { regular },
  } = image;

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      contentLabel={description}
      preventScrolling={true}
      preventScroll={true}
    >
      <div className={styles.modal}>
        <img className={styles.modalImage} src={regular} alt="Seleted image" />
      </div>
    </Modal>
  );
}
