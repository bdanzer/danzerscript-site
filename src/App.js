import React, { useState, useRef } from "react";
import "./styles.scss";

import Slider from "./components/slider/slider";
import Card from "./components/cards/card";
import Button from "./components/button/button";
import Tabs from "./components/tabs/tabs";
import Modal from "./components/modal/modal";
import Portfolio from "./components/portfolio/portfolio";
import MenuParent from "./components/menu-parent/menu-parent";
import MenuItem from "./components/menu-item/menu-item";
import DScriptLogo from "./components/d-script-logo/d-script-logo";
import Section from "./components/section/section";

import Title from "./components/title/title";

const cardData = [
  { imgSrc: "https://source.unsplash.com/800x601" },
  { imgSrc: "https://source.unsplash.com/800x602" },
  { imgSrc: "https://source.unsplash.com/800x603" },
  { imgSrc: "https://source.unsplash.com/800x604" },
  { imgSrc: "https://source.unsplash.com/800x605" },
  { imgSrc: "https://source.unsplash.com/800x606" }
];

function TestComponent({ children }) {
  // console.log(children);
  let childrenArr = React.Children.toArray(children);
  // console.log("test", childrenArr, [...childrenArr, ...childrenArr]);
  // return React.Children.map(children, child =>
  //   React.cloneElement(child, {
  //     customProp: "changed",
  //     style: {
  //       background: "red"
  //     }
  //   })
  // );
  return null;
}

const PlaceHolder = React.forwardRef(function PlaceHolder(props, ref) {
  return (
    <div style={props.style} ref={ref}>
      {props.customProp}
    </div>
  );
});

export default function App() {
  const [isOpen, setModalState] = useState(false);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  return (
    <>
      {/* <div
        style={{
          padding: "20px",
          background: "lightblue",
          width: 250,
          height: 250
        }}
        className="box"
        onMouseEnter={() => setModalState(true)}
      /> */}
      {/* <Modal isOpen={isOpen}>This is the content in the modal</Modal> */}

      <MenuParent>
        <div>
          <DScriptLogo />
        </div>
        <div className="menu-wrap row">
          <MenuItem sectionLink={section1} text="About" />
          <MenuItem sectionLink={section2} text="Tech Stack" />
          <MenuItem sectionLink={section3} text="Projects" />
          <MenuItem sectionLink={section4} text="Recommendations" />
          <MenuItem sectionLink={section5} text="Contact" />
        </div>
      </MenuParent>

      <Section
        ref={section1}
        style={{
          background: "#4b4bff14"
        }}
      >
        <Title tag="h2" className="hello">
          About dScript
        </Title>
        <p style={{ maxWidth: 550 }}>
          I am a Full-Stack JavaScript Engineer, with emphasis on Front-End. I
          am constantly learning and continously taking on new challenges. If
          you would like to work with me then contact me! Otherwise, please take
          a look around the site.
        </p>
        <p>
          <Button text="Contact Me" />
          <a className="secondary-button transparent" href="">
            Learn More
          </a>
        </p>
      </Section>
      <Section ref={section2}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Tech Stack
        </h2>
        <Tabs />
      </Section>
      <Section
        ref={section3}
        style={{
          padding: "60px 0"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Projects</h2>
        <Slider>
          {cardData.map((cardData, i) => (
            <>
              <Card
                key={i}
                {...cardData}
                onClick={() => {
                  setModalState(true);
                }}
              />
              {isOpen && (
                <Modal isOpen={isOpen}>
                  {console.log("modalData", cardData)}
                </Modal>
              )}
            </>
          ))}
        </Slider>
      </Section>
      <Section ref={section4}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Recommendations
        </h2>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section ref={section5}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Contact
        </h2>
      </Section>
      <TestComponent>
        <div>
          Child 1 <div>SubChild</div>
        </div>
        <div>
          Child 2 <div>SubChild</div>
        </div>
        <PlaceHolder style={{ background: "red" }} customProp="yay customs" />
      </TestComponent>
      {/* <Portfolio /> */}
    </>
  );
}
