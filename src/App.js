import React, { useEffect, useState, useRef } from "react";
import "./styles.scss";

function Modal({ children, isOpen }) {
  return isOpen && <div className="modal-container">{children}</div>;
}

function ProgressLine({ progress, classes }) {
  return (
    <div className={`underline-wrap ${classes ? classes : ""}`}>
      <span className="underline" />
      <span
        style={{
          width: `${100 - progress}%`,
          transition: ".15s ease",
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)"
        }}
        className="underline underline-progress"
      />
    </div>
  );
}

function MenuItem({ sectionLink, text }) {
  const [progress, setProgress] = useState();
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (sectionLink) {
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const onScroll = () => {
    let scroll = false;
    let lastScrollY = window.scrollY;
    if (!scroll) {
      requestAnimiation(lastScrollY);
      scroll = true;
    }
  };

  const requestAnimiation = lastScrollY => {
    window.requestAnimationFrame(() => {
      let elOffsetTop =
        sectionLink.current.offsetTop -
        (sectionLink.current.offsetTop === 0 ? 0 : 62);
      // console.log(elOffsetTop);
      let elOffsetHeight =
        sectionLink.current.offsetHeight - (elOffsetTop !== 0 ? 0 : 62);
      let totalElOffsetHeight = elOffsetTop + elOffsetHeight;
      let elOffsetLessThanWindowY = elOffsetTop < window.pageYOffset;
      let totalElOffsetHeightGreaterThanWindowY =
        totalElOffsetHeight > window.pageYOffset;

      let inRange =
        elOffsetLessThanWindowY && totalElOffsetHeightGreaterThanWindowY;

      // if (elOffsetLessThanWindowY && totalElOffsetHeightGreaterThanWindowY) {

      if (elOffsetTop && window.pageYOffset < 62) {
        return;
      }

      let progressTotal = (window.pageYOffset - elOffsetTop) / elOffsetHeight;
      let percentage = Math.floor(progressTotal * 100);

      if (percentage >= 100) {
        percentage = 100;
      }

      if (percentage <= 0) {
        percentage = 0;
      }

      if (inRange) {
        setHide(false);
      } else {
        setHide(true);
      }

      setProgress(percentage);
      // }
    });
  };

  const handleMenuClick = e => {
    let elOffsetTop = sectionLink.current.offsetTop - 62;

    window.scrollTo({
      top: elOffsetTop + 1,
      behavior: "smooth"
    });

    e.preventDefault();
  };

  return (
    <div className="menu-item">
      <div className="menu-item-wrap">
        <div className="column">
          <a href="/" onClick={handleMenuClick}>
            {text}
            <ProgressLine
              classes={`${hide ? "hidden" : "visibile"}`}
              progress={progress}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [isOpen, setModalState] = useState(false);

  const toggleModal = ID => {
    setModalState(!isOpen);
    console.log(ID);
  };

  return (
    <div className="row">
      <div onClick={() => toggleModal("ID")}>Hello</div>
      <div>Hello</div>
      <div>Hello</div>

      <Modal isOpen={isOpen}>This is a modal</Modal>
    </div>
  );
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

      <section ref={section1} />
      <section ref={section2} />
      <section ref={section3} />
      <Portfolio />
    </>
  );
}
