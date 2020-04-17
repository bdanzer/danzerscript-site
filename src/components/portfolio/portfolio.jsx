import React, { useState } from "react"

import Modal from "../modal/modal"

export default function Portfolio() {
  const [isOpen, setModalState] = useState(false)

  const toggleModal = (ID) => {
    setModalState(!isOpen)
    console.log(ID)
  }

  return (
    <div className="row">
      <div onClick={() => toggleModal("ID")}>Hello</div>
      <div>Hello</div>
      <div>Hello</div>

      <Modal isOpen={isOpen}>This is a modal</Modal>
    </div>
  )
}
