import React, { useRef, useEffect, useState } from "react";

import "./slider.scss";

export default function Slider() {
  let sliderRef = useRef();
  const [sliderChildenState, setSliderChildren] = useState([]);

  useEffect(() => {
    let sliderChildren = sliderRef.current.children;
    let refWidth = sliderRef.current.clientWidth;
    // console.log(sliderChildren);

    for (let i = 0; i < sliderChildren.length; i++) {
      let child = sliderChildren[i];

      let childWidth = refWidth / 3;

      child.style.width = childWidth + "px";
      child.style.flex = `0 0 ${childWidth}px`;
      child.style.transform = `translateX(${childWidth * i}px)`;
      // console.log();
    }

    setSliderChildren(sliderChildren);
  }, []);

  const moveSlider = () => {
    console.log(sliderChildenState);
    for (let i = 0; i < sliderChildenState.length; i++) {
      let child = sliderChildenState[i];
      console.log(child.style.transform);
    }
  };

  return (
    <>
      <div ref={sliderRef} className="slider-container">
        <div className="item">Item1</div>
        <div className="item">Item2</div>
        <div className="item">Item3</div>
        <div className="item">Item4</div>
        <div className="item">Item5</div>
        <div className="item">Item6</div>
        <div className="item">Item7</div>
        <div className="item">Item8</div>
        <div className="item">Item9</div>
      </div>
      <div onClick={moveSlider}>Arrow Right</div>
    </>
  );
}
