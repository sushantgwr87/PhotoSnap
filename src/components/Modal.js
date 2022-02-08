import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/modal.module.css";

const Modal = ({ show, onClose }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    };

    useEffect(() => {
      setIsBrowser(true);
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <div className={styles.modal_overlay}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          <div className={styles.modal_body}>
              Hello Modal
          </div>
        </div>
      </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
};

export default Modal;