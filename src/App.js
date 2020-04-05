import React, { useState, useRef, Children } from "react";
import "./styles.scss";

import Slider from "./components/slider/slider";
import Card from "./components/cards/card";
import Button from "./components/button/button";
import Tabs from "./components/tabs/tabs";
import Modal from "./components/modal/modal";
import Portfolio from "./components/portfolio/portfolio";
import MenuItem from "./components/menu-item/menu-item";

function TestComponent({ children }) {
  Children.map(children, child => console.log(child));
  // console.log(children);
  return null;
}

function PlaceHolder({ customProp }) {
  return <div>{customProp}</div>;
}

export default function App() {
  const [isOpen, setModalState] = useState(false);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

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
      <Modal isOpen={isOpen}>This is the content in the modal</Modal>

      <div className="menu-parent row">
        <MenuItem sectionLink={section1} text="Section 1" />
        <MenuItem sectionLink={section2} text="Section 2" />
        <MenuItem sectionLink={section3} text="Section 3" />
      </div>

      <section ref={section1}>
        <h2>About dScript</h2>
        <p>
          I am a Full-Stack JavaScript Engineer, with emphasis on Front-End. I
          am constantly learning and continously taking on new challenges to
          better myself. If you would like to work with me then contact me!
          Otherwise, please take a look around the site.
        </p>
        <p>
          <Button text="Contact Me" />
          <a class="secondary-button transparent" href="">
            Learn More
          </a>
        </p>
      </section>
      <section ref={section2}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Hello!
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section ref={section3}>
        <Tabs />
      </section>
      <TestComponent>
        <div>
          Child 1 <div>SubChild</div>
        </div>
        <div>
          Child 2 <div>SubChild</div>
        </div>
        <PlaceHolder customProp="yay customs" />
      </TestComponent>
      <Portfolio />
      <Slider />
    </>
  );
}
