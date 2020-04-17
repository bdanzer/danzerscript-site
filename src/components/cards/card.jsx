import React, { useState } from "react"

import Button from "../button/button"
import Image from "../image/image"

import "./card.scss"
import { ReactComponent as GitHub } from "./github-icon.svg"

const defaultDescription =
  "This is a paragraph, and we are going to keep talking and talking because we need some filling to check things out!"

export default function Card(props) {
  const {
    imgSrc,
    onClick,
    title = "Card",
    description = defaultDescription,
    Icon,
    showButton = true
  } = props

  return (
    <div className="card">
      <div className="card-wrap">
        {imgSrc && (
          <div className="card-image-wrap">
            <Image src={imgSrc} alt="hello" />
          </div>
        )}
        <div className="content-wrap">
          <div className="card-content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="card-footer">
            {showButton ? (
              <p>
                <Button text="View" onClick={onClick} />
              </p>
            ) : (
              ""
            )}
            {Icon ? <Icon className="icon" /> : <GitHub className="icon" />}
          </div>
        </div>
      </div>
    </div>
  )
}
