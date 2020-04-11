import React from "react";

import "./d-script-logo.scss";

export default function DScriptLogo({ isLarge }) {
  return (
    <div
      className={`logo ${isLarge ? "large" : "small"}`}
      style={{
        fontSize: 20
      }}
    >
      <span
        style={{
          margin: 0,
          color: "#4b4bff"
        }}
      >
        d
      </span>
      <span>(</span>
      <span>
        s<span className="second-part">cripts</span>
      </span>
      <span>)</span>
    </div>
  );
}
