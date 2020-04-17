import React from "react"

export default function Button({ text, link, onClick }) {
  return (
    <a href={link} className="primary-button" onClick={onClick}>
      {text}
    </a>
  )
}
