import React, { useState, useRef, useEffect } from "react";

import TabContent from "./tab-content";

import "./tabs.scss";

let json = {
  tabButtons: [
    {
      title: "Front-End"
    },
    {
      title: "Back-End"
    },
    {
      title: "Testing"
    },
    {
      title: "Dev-Ops"
    }
  ],
  tabContent: [
    {
      title: "Front-End Tools",
      content:
        "I have a solid foundation and understanding of JavaScript. My Framework of choice is React with Redux for complex state management but I have worked with Vue and VueX. I have also built web components with Stencil and Typescript.",
      buttonText: "Contact Me"
    },
    {
      title: "Back-End Tools",
      content: "These are the back-end tools I have most frequently used",
      buttonText: "Contact Me"
    },
    {
      title: "Testing",
      content: "These are the back-end tools I have most frequently used",
      buttonText: "Contact Me"
    },
    {
      title: "Server Tools",
      content: "These are the server tools I have most frequently used",
      buttonText: "Contact Me"
    }
  ]
};

export default function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const tabContainerRef = useRef();

  useEffect(() => {
    fixTabContainerHeight();
  }, []);

  const fixTabContainerHeight = () => {
    let tabContainer = tabContainerRef.current;
    let tabChildren = tabContainer.children;
    let height = 0;

    for (let i = 0; i < tabChildren.length; i++) {
      let child = tabChildren[i];
      height = height < child.offsetHeight ? child.offsetHeight : height;
    }

    tabContainer.style.height = `${height}px`;
  };

  return (
    <div className="tabs-wrap">
      <div className="row">
        <div className="col-one-fourth">
          {json.tabButtons.map((tabButton, i) => (
            <div
              key={i}
              tabIndex="0"
              onClick={() => setCurrentTabIndex(i)}
              className={`tab-button ${currentTabIndex === i ? "active" : ""}`}
              onKeyUp={e => (e.key === "Enter" ? setCurrentTabIndex(i) : "")}
              onKeyDown={e => {
                switch (e.key) {
                  case "ArrowLeft":
                    i !== 0 ? setCurrentTabIndex(i - 1) : null;
                    break;
                  case "ArrowRight":
                    i < json.tabButtons.length
                      ? setCurrentTabIndex(i + 1)
                      : null;
                    break;
                  default:
                    break;
                }
              }}
            >
              {tabButton.title}
            </div>
          ))}
        </div>
        <div
          ref={tabContainerRef}
          className="col-three-fourths"
          style={{
            position: "relative"
          }}
        >
          {json.tabContent.map((tabContent, i) => (
            <TabContent
              key={i}
              active={currentTabIndex === i}
              {...tabContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
