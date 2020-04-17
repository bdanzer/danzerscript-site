import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import "./modal.scss"

const modalRoot = document.getElementById("modal-root")
const el = document.createElement("div")

export default function Modal({ children, isOpen }) {
  useEffect(() => {
    el.classList.add("modal")
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  return (
    isOpen &&
    ReactDOM.createPortal(<div className="modal-wrap">{children}</div>, el)
  )
  // return isOpen && <div className="modal-container">{children}</div>;
}
