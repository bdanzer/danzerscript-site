import React from "react";

export default function Title(props) {
  const { children, tag, className } = props;

  return React.createElement(
    tag,
    {
      className: "title"
    },
    children
  );
}
