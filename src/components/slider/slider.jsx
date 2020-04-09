import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

import "./slider.scss";

export default function Slider({ children }) {
  let sliderRef = useRef();
  const [currentWidthPer, setCurrentWidthPer] = useState(0);
  const [totalTranlated, setTotalTranslated] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCalculations();
    });
  }, []);

  useLayoutEffect(() => {
    setCalculations();
  }, []);

  const setCalculations = () => {
    if (window.innerWidth < 1000) {
      calculate(0, 1);
    } else {
      calculate(3, 2);
    }
  };

  const calculate = (totalCards, slice) => {
    totalCards = totalCards + 1;

    let sliderChildren = sliderRef.current.children;
    let refWidth = sliderRef.current.clientWidth;
    let widthPer = refWidth / totalCards;

    setCurrentWidthPer(widthPer);
    setTotalTranslated(-widthPer / slice);

    for (let i = 0; i < sliderChildren.length; i++) {
      let child = sliderChildren[i];

      child.style.width = widthPer + "px";
      child.style.flex = `0 0 ${widthPer}px`;
      child.style.maxWidth = `${widthPer}px`;
    }
  };

  const movePrev = () => {
    let total = totalTranlated + currentWidthPer;

    if (total <= currentWidthPer) {
      setTotalTranslated(total);
    }
  };

  const moveNext = () => {
    let count = React.Children.count(children);
    let maxWidth = count * currentWidthPer;
    let total = totalTranlated - currentWidthPer;

    if (Math.abs(total) < maxWidth) {
      setTotalTranslated(total);
    }
  };

  return (
    <>
      <div className="slider">
        <div
          ref={sliderRef}
          className="slider-container"
          style={{
            transform: `translateX(${totalTranlated}px)`
          }}
        >
          {children}
        </div>
        <div
          style={{ width: `${currentWidthPer / 2}px` }}
          className="arrow left"
          onClick={movePrev}
        >
          Arrow Left
        </div>
        <div
          style={{ width: `${currentWidthPer / 2}px` }}
          className="arrow right"
          onClick={moveNext}
        >
          Arrow Right
        </div>
      </div>
    </>
  );
}
