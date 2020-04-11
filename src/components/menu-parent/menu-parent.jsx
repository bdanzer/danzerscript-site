import React, { useRef, useEffect, useState } from "react";

import "./menu-parent.scss";

export default function MenuParent({ children }) {
  const menuContainer = useRef();
  const [isMoving, setMoving] = useState(false);
  const [resize, setResize] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    let windowSizeListener = window.addEventListener("resize", () => {
      // console.log("resizing");
      setResize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", windowSizeListener);
      console.log("removed");
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      ref={menuContainer}
      className={`menu-parent row ${isMoving ? "moving" : "not-moving"} ${
        menuOpen ? "open" : "closed"
      }`}
      style={{
        justifyContent: "space-between"
      }}
    >
      {children(resize, toggleMenu)}
    </div>
  );
}
