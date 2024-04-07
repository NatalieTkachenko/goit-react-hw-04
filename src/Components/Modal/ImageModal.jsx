// === Библиотечные модули ===
import Modal from "react-modal";

// === Стили ===
import styles from "./ImageModal.module.css";

Modal.setAppElement("#modal-root");

const customStyles = {
  content: styles,
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
      <img src={regular} alt="Seleted image" />
    </Modal>
  );
}
