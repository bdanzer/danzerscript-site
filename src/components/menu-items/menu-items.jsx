import React from "react"

import MenuItem from "../menu-item/menu-item"

export default function MenuItems({ size, menuData, elementsRef }) {
  return (
    <div className={`menu-wrap row ${size < 1000 ? "mobile" : "desktop"}`}>
      {menuData.map((menu, i) => (
        <MenuItem
          key={i}
          sectionLink={elementsRef.current[i]}
          text={menu.text}
          menu
        />
      ))}
    </div>
  )
}
