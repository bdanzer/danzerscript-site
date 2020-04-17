import React from "react"

import ContentArea from "../content-area/content-area"

export default function TabContent(props) {
  const { active, children } = props

  return (
    <div className={`tab-right-wrap tab-content ${active ? "active" : ""}`}>
      <div className="row">
        <div className="col-2 content-area-container">
          <ContentArea {...props} />
        </div>
        <div className="col-2 align-items-center">{children(active)}</div>
      </div>
    </div>
  )
}
