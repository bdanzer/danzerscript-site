import React from "react"

import "./title.scss"

export default function Title(props) {
  const { children, tag, className, style } = props

  return React.createElement(
    tag,
    {
      className: "title",
      style: style
    },
    children
  )
}
