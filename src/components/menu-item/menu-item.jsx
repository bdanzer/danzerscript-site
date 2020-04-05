import React, { useEffect, useState } from "react";

import ProgressLine from "../progress/progress";

export default function MenuItem({ sectionLink, text }) {
  const [progress, setProgress] = useState();
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (sectionLink) {
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const onScroll = () => {
    let scroll = false;
    let lastScrollY = window.scrollY;
    if (!scroll) {
      requestAnimiation(lastScrollY);
      scroll = true;
    }
  };

  const requestAnimiation = lastScrollY => {
    window.requestAnimationFrame(() => {
      let elOffsetTop =
        sectionLink.current.offsetTop -
        (sectionLink.current.offsetTop === 0 ? 0 : 62);
      // console.log(elOffsetTop);
      let elOffsetHeight =
        sectionLink.current.offsetHeight - (elOffsetTop !== 0 ? 0 : 62);
      let totalElOffsetHeight = elOffsetTop + elOffsetHeight;
      let elOffsetLessThanWindowY = elOffsetTop < window.pageYOffset;
      let totalElOffsetHeightGreaterThanWindowY =
        totalElOffsetHeight > window.pageYOffset;

      let inRange =
        elOffsetLessThanWindowY && totalElOffsetHeightGreaterThanWindowY;

      // if (elOffsetLessThanWindowY && totalElOffsetHeightGreaterThanWindowY) {

      if (elOffsetTop && window.pageYOffset < 62) {
        return;
      }

      let progressTotal = (window.pageYOffset - elOffsetTop) / elOffsetHeight;
      let percentage = Math.floor(progressTotal * 100);

      if (percentage >= 100) {
        percentage = 100;
      }

      if (percentage <= 0) {
        percentage = 0;
      }

      if (inRange) {
        setHide(false);
      } else {
        setHide(true);
      }

      setProgress(percentage);
      // }
    });
  };

  const handleMenuClick = e => {
    let elOffsetTop = sectionLink.current.offsetTop - 62;

    window.scrollTo({
      top: elOffsetTop + 1,
      behavior: "smooth"
    });

    e.preventDefault();
  };

  return (
    <div className="menu-item">
      <div className="menu-item-wrap">
        <div className="column">
          <a href="/" onClick={handleMenuClick}>
            {text}
            <ProgressLine
              classes={`${hide ? "hidden" : "visibile"}`}
              progress={progress}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
