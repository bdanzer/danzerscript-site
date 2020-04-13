import React from "react";

// import "~/danzerpress-layouts/dist/css/danzerpress-layouts.css";

export default function Col({ children, col = 1, disabled }) {
  return <div class={`col-${disabled ? "disabled" : col}`}>{children}</div>;
}
