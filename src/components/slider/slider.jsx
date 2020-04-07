import React, { useRef, useEffect, useState } from "react";

import "./slider.scss";

export default function Slider({ children }) {
  let sliderRef = useRef();
  const [sliderChildenState, setSliderChildren] = useState([]);
  const [currentWidthPer, setCurrentWidthPer] = useState(0);
  const [totalTranlated, setTotalTranslated] = useState(0);

  useEffect(() => {
    let sliderChildren = sliderRef.current.children;
    let refWidth = sliderRef.current.clientWidth;
    // console.log(sliderChildren);

    console.log("width: ", refWidth, refWidth / 4);

    let widthPer = refWidth / 4;
    console.log("widthPer", widthPer, refWidth);

    // setTotalTranslated(widthPer);
    setCurrentWidthPer(widthPer);
    setTotalTranslated(-widthPer / 2);

    // React.Children.map(child => React.cloneElement(child, {

    // }));

    for (let i = 0; i < sliderChildren.length; i++) {
      let child = sliderChildren[i];

      child.style.width = widthPer + "px";
      child.style.flex = `0 0 ${widthPer}px`;
      child.style.maxWidth = `${widthPer}px`;
      // child.style.transform = `translateX(${widthPer * i}px)`;
      // console.log();
    }

    // React.Children.map(children, child => {
    //   console.log(child);
    // });

    // setSliderChildren(sliderChildren);
  }, []);

  const movePrev = direction => {
    let total = totalTranlated + currentWidthPer;
    // console.log("prev", total, total < 0);
    if (total <= currentWidthPer) {
      setTotalTranslated(total);
    }
  };

  const moveNext = () => {
    // console.log(sliderChildenState);
    let count = React.Children.count(children);
    let maxWidth = count * currentWidthPer;
    let total = totalTranlated - currentWidthPer;

    // console.log("next", total, maxWidth, total < maxWidth);

    if (Math.abs(total) < maxWidth) {
      setTotalTranslated(total);
    }
  };

  return (
    <>
      <div
        className="slider"
        onDrag={e => console.log("drag", e)}
        onDragEnter={e => console.log("drag", e)}
        onMouseDown={e => console.log("drag")}
      >
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
