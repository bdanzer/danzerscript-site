import React, { forwardRef } from "react"

import "./section.scss"

const Section = forwardRef(function Section(props, ref) {
  const { children, style } = props

  return (
    <section style={style} ref={ref}>
      {children}
    </section>
  )
})

export default Section
