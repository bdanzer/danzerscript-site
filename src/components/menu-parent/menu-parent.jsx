import React, { useRef, useEffect, useState } from "react";

import "./menu-parent.scss";

export default function MenuParent({ children }) {
  const menuContainer = useRef();
  const [isMoving, setMoving] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = false;
      if (!scrolled) {
        if (window.pageYOffset > 0) {
          setMoving(true);
        } else {
          setMoving(false);
        }
        scrolled = true;
      }
    });
  }, []);

  return (
    <div
      ref={menuContainer}
      className={`menu-parent row ${isMoving ? "moving" : "not-moving"}`}
      style={{
        justifyContent: "space-between"
      }}
    >
      {children}
    </div>
  );
}
