import React from "react"

import Button from "../button/button"

export default function ContentArea({ title, content, buttonText }) {
  return (
    <div className="content-area">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <Button text={buttonText} />
      </p>
    </div>
  )
}
