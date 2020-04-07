import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");
const el = document.createElement("div");

export default function Modal({ children, isOpen }) {
  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return isOpen && ReactDOM.createPortal(children, el);
  // return isOpen && <div className="modal-container">{children}</div>;
}
