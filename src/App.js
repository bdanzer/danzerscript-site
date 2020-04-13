import React, { useState, useRef, createRef } from "react";
import "./styles.scss";

import Slider from "./components/slider/slider";
import Card from "./components/cards/card";
import Button from "./components/button/button";
import Tabs from "./components/tabs/tabs";
import Modal from "./components/modal/modal";
import MenuParent from "./components/menu-parent/menu-parent";
import MenuItems from "./components/menu-items/menu-items";
import DScriptLogo from "./components/d-script-logo/d-script-logo";
import Section from "./components/section/section";

import Col from "./components/col/col";

import Form from "./components/form/form";

import Title from "./components/title/title";

const cardData = [
  { imgSrc: "https://source.unsplash.com/800x601" },
  { imgSrc: "https://source.unsplash.com/800x602" },
  { imgSrc: "https://source.unsplash.com/800x603" },
  { imgSrc: "https://source.unsplash.com/800x604" },
  { imgSrc: "https://source.unsplash.com/800x605" },
  { imgSrc: "https://source.unsplash.com/800x606" }
];

const menuData = [
  { text: "About", link: "#" },
  { text: "Tech Stack", link: "#" },
  { text: "Projects", link: "#" },
  { text: "Recommendations", link: "#" },
  { text: "Contact", link: "#" }
];

export default function App() {
  const [isOpen, setModalState] = useState(false);
  const elementsRef = useRef(
    Array(menuData.length)
      .fill("")
      .map(() => createRef())
  );

  return (
    <>
      <Col col="2" disabled>
        <h2>HellO!</h2>
      </Col>
      <MenuParent>
        {(windowSize, toggleMenu) => (
          <>
            <DScriptLogo isLarge={true} />
            <MenuItems
              size={windowSize}
              menuData={menuData}
              elementsRef={elementsRef}
            />
            {windowSize < 1000 && (
              <button className="menu-button-mobile" onClick={toggleMenu}>
                Menu
              </button>
            )}
          </>
        )}
      </MenuParent>

      <Section
        ref={elementsRef.current[0]}
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
          <a className="secondary-button transparent" href="#section">
            Learn More
          </a>
        </p>
      </Section>
      <Section ref={elementsRef.current[1]}>
        <Title
          style={{ textAlign: "center", marginBottom: "20px" }}
          tag="h2"
          className="hello"
        >
          Tech Stack
        </Title>
        <Tabs />
      </Section>
      <Section
        ref={elementsRef.current[2]}
        style={{
          padding: "60px 0"
        }}
      >
        <Title
          style={{ textAlign: "center", marginBottom: "20px" }}
          tag="h2"
          className="hello"
        >
          Projects
        </Title>
        <Slider>
          {cardData.map((cardData, i) => (
            <>
              <Card
                key={i}
                {...cardData}
                onClick={() => {
                  setModalState(!isOpen);
                }}
              />
              {isOpen && (
                <Modal isOpen={isOpen}>
                  {console.log("modalData", cardData)}
                  <h2>{cardData.title}</h2>
                </Modal>
              )}
            </>
          ))}
        </Slider>
      </Section>
      <Section ref={elementsRef.current[3]}>
        <Title
          style={{ textAlign: "center", marginBottom: "20px" }}
          tag="h2"
          className="hello"
        >
          Recommendations
        </Title>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section ref={elementsRef.current[4]}>
        <Title
          style={{ textAlign: "center", marginBottom: "20px" }}
          tag="h2"
          className="hello"
        >
          Contact
        </Title>
        <Form>
          <input name="name" type="text" value="" placeholder="Your Name" />
          <input name="email" type="text" value="" placeholder="Your Email" />
          <input name="budget" type="number" value="" placeholder="budget" />
          <select
            name="menu-priority"
            className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
          >
            <option value="">---</option>
            <option value="Expedited">Expedited</option>
            <option value="Normal">Normal</option>
            <option value="We've got some time">We've got some time</option>
          </select>
          <select
            name="menu-query"
            className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
          >
            <option value="">---</option>
            <option value="Website Design">Website Design</option>
            <option value="Site Migration">Site Migration</option>
            <option value="Site Maintenance">Site Maintenance</option>
            <option value="Optimize Site Speed">Optimize Site Speed</option>
            <option value="Troubleshooting">Troubleshooting</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="textarea-detail"
            cols="40"
            rows="10"
            className=""
            aria-required="true"
            aria-invalid="false"
            placeholder="Message"
          />
          <button type="submit">Sending</button>
        </Form>
      </Section>
    </>
  );
}
