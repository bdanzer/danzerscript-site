import React, { useRef, useState, useLayoutEffect, useEffect } from "react"

import { ReactComponent as NextIcon } from "../../svgs/ui/next.svg"

import "./slider.scss"

export default function Slider({ children }) {
  const [slideState, setSlideState] = useState({})
  const sliderRef = useRef()

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCalculations()
    })
  }, [])

  useLayoutEffect(() => {
    setCalculations()
  }, [])

  const setCalculations = () => {
    if (window.innerWidth > 1000) {
      calculate(5, 1 / 2, -2)
    } else if (window.innerWidth > 800) {
      calculate(4, 1 / 3, -1)
    } else {
      calculate(3, 1 / 4, 0)
    }
  }

  const calculate = (totalCards, slice, offset) => {
    let sliderChildren = sliderRef.current.children

    let percentageWidth = 100 / totalCards
    let slicedWidth = percentageWidth * slice
    let slicedTotal = 100 - slicedWidth * 2
    let viewableCards = totalCards - 2
    let actualWidth = slicedTotal / viewableCards

    setSlideState({
      actualWidth,
      slicedWidth,
      childCount: sliderChildren.length,
      totalTranslated: slicedWidth - actualWidth,
      totalCards,
      viewableCards
    })

    for (let i = 0; i < sliderChildren.length; i++) {
      let child = sliderChildren[i]

      child.style.width = actualWidth + "%"
      child.style.flex = `0 0 ${actualWidth}%`
      child.style.maxWidth = `${actualWidth}%`
    }
  }

  const movePrev = () => {
    let total = slideState.totalTranslated + slideState.actualWidth

    if (total <= slideState.actualWidth) {
      setTotalTranslated(total)
    }
  }

  const setTotalTranslated = (total) => {
    setSlideState({
      ...slideState,
      totalTranslated: total
    })
  }

  const moveNext = () => {
    const {
      childCount,
      totalCards,
      totalTranslated,
      slicedWidth,
      actualWidth,
      viewableCards
    } = slideState

    let moveSlidesPast = 2

    let maxWidth =
      childCount * actualWidth - actualWidth * viewableCards - slicedWidth

    let total = totalTranslated - actualWidth * moveSlidesPast

    console.log({
      ...slideState,
      total,
      maxWidth
    })

    if (Math.abs(total) <= maxWidth) {
      setTotalTranslated(total)
    } else {
      setTotalTranslated(-maxWidth)
    }
  }

  return (
    <>
      <div className="slider">
        <div
          ref={sliderRef}
          className="slider-container"
          style={{
            transform: `translateX(${slideState.totalTranslated}%)`
          }}>
          {children}
        </div>
        <div
          style={{ width: `${slideState.slicedWidth}%` }}
          className="arrow left"
          onClick={movePrev}>
          <span className="arrow-text">Arrow Left</span>
          <NextIcon />
        </div>
        <div
          style={{ width: `${slideState.slicedWidth}%` }}
          className="arrow right"
          onClick={moveNext}>
          <span className="arrow-text">Arrow Right</span>
          <NextIcon />
        </div>
      </div>
    </>
  )
}
