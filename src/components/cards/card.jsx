import React from "react";

import Button from "../button/button";

import "./card.scss";
import { ReactComponent as GitHub } from "./github-icon.svg";

export default function Card({ imgSrc }) {
  return (
    <div class="card">
      <div className="card-wrap">
        {imgSrc && <img alt="hello" src={imgSrc} />}
        <div className="content-wrap">
          <div className="card-content">
            <h2>Card</h2>
            <p>
              This is a paragraph, and we are going to keep talking and talking
              because we need some filling to check things out!
            </p>
          </div>
          <div className="card-footer">
            <p>
              <Button text="View" />
            </p>
            <GitHub className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
