import React from "react";

// import "~/danzerpress-layouts/dist/css/danzerpress-layouts.css";

export default function Col({ children, col = 1 }) {
  return <div class={`col-${col}`}>{children}</div>;
}
