import React from "react";

export default function Modal({ children, isOpen }) {
  return isOpen && <div className="modal-container">{children}</div>;
}
