import React from "react";

import Button from "../button/button";

import "./card.scss";
import { ReactComponent as GitHub } from "./github-icon.svg";

export default function Card() {
  return (
    <div class="card">
      <img alt="hello" src="https://source.unsplash.com/800x600" />
      <div className="content-wrap">
        <h2>Card</h2>
        <p>
          This is a paragraph, and we are going to keep talking and talking
          because we need some filling to check things out!
        </p>
        <p>
          <Button text="View" />
        </p>
      </div>
      <GitHub className="icon" />
    </div>
  );
}
