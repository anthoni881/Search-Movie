import React from "react";
import "../Css/Modal.css";

const Modal = ({ poster, close }) => {
  return (
    <div className="modal-container" data-cy="modal-container">
      <div className="image-container">
        <span className="close-button" onClick={close} data-cy="close-btn">
          &times;
        </span>
        <img
          style={{ width: "50%" }}
          src={poster}
          alt="img"
          data-cy="modal-img"
        />
      </div>
    </div>
  );
};
export default Modal;
