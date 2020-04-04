import React from "react";

export default function Button({ text, link }) {
  return (
    <a href={link} class="primary-button">
      {text}
    </a>
  );
}
