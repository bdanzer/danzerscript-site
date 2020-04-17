import React, { useState, useEffect } from "react"

import "./form.scss"

export default function Form({ children }) {
  const [formValues, setformValues] = useState({})
  const [childrenToDiplay, setChildrenToDisplay] = useState(null)

  useEffect(() => {
    const formattedChildren = React.Children.map(children, (child, index) => {
      if (child.type === "button") {
        return child
      }

      if (!isFormAble(child.type)) return

      return React.cloneElement(child, {
        key: index,
        onChange: (e) => handleFormChange(e, child.props.name),
        value: formValues[child.props.name]
          ? formValues[child.props.name]
          : child.props.value
      })
    })

    setChildrenToDisplay(formattedChildren)
  }, [formValues])

  const handleFormChange = (e, name) => {
    // e.target.value
    console.log(e.target.value, name)
    setformValues({
      ...formValues,
      [name]: e.target.value
    })
  }

  const isFormAble = (childType) => {
    const supportedTypes = ["input", "textarea", "select"]
    return supportedTypes.indexOf(childType) !== -1
  }

  const handleValidation = (formValues) => {
    console.log(formValues)
  }

  return (
    <div>
      <form
        className="form-wrap"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(formValues)
          handleValidation(formValues)
        }}>
        {childrenToDiplay}
      </form>
    </div>
  )
}
