import React, { useState, useRef, useEffect } from "react";

import { ReactComponent as JavaScriptIcon } from "../../svgs/javascript.svg";
import { ReactComponent as ReduxIcon } from "../../svgs/redux.svg";
import { ReactComponent as ReactIcon } from "../../svgs/react.svg";
import { ReactComponent as VueIcon } from "../../svgs/vue.svg";
import { ReactComponent as StencilIcon } from "../../svgs/stencil.svg";
import { ReactComponent as TypeScriptIcon } from "../../svgs/typescript.svg";

import { ReactComponent as NextJSIcon } from "../../svgs/nextjs.svg";
import { ReactComponent as ExpressIcon } from "../../svgs/express.svg";
import { ReactComponent as MongoDB } from "../../svgs/mongodb.svg";
import { ReactComponent as NodeJS } from "../../svgs/nodejs.svg";
import { ReactComponent as WordPress } from "../../svgs/wordpress.svg";
import { ReactComponent as FireBase } from "../../svgs/firebase.svg";

import { ReactComponent as Puppeteer } from "../../svgs/puppeteer.svg";
import { ReactComponent as Jest } from "../../svgs/jest.svg";

import { ReactComponent as Docker } from "../../svgs/docker.svg";
import { ReactComponent as Jenkins } from "../../svgs/jenkins.svg";
import { ReactComponent as Aws } from "../../svgs/aws.svg";
import { ReactComponent as CloudFlare } from "../../svgs/cloudflare.svg";
import { ReactComponent as DigitalOcean } from "../../svgs/digital-ocean.svg";
import { ReactComponent as Zeit } from "../../svgs/zeit.svg";

import TabContent from "./tab-content";

import "./tabs.scss";

let json = {
    tabButtons: [
        {
            title: "Front-End",
        },
        {
            title: "Back-End",
        },
        {
            title: "Testing",
        },
        {
            title: "Dev-Ops",
        },
    ],
    tabContent: [
        {
            title: "Front-End Tools",
            content:
                "I have a solid foundation and understanding of JavaScript. My Framework of choice is React with Redux for complex state management but I have worked with Vue and VueX. I have also built web components with Stencil and Typescript.",
            buttonText: "Contact Me",
            icons: [
                JavaScriptIcon,
                ReactIcon,
                ReduxIcon,
                StencilIcon,
                TypeScriptIcon,
                VueIcon,
            ],
        },
        {
            title: "Back-End Tools",
            content:
                "NodeJS and Express are the bread and butter of what I use. I  use NextJS for SSR Javascript, and have been learning isomorphic design. I also use Firebase or Mongo for NoSQL. WordPress as a headless CMS",
            buttonText: "Contact Me",
            icons: [
                NodeJS,
                ExpressIcon,
                NextJSIcon,
                MongoDB,
                FireBase,
                WordPress,
            ],
        },
        {
            title: "Testing",
            content:
                "I have used Puppeteer to leverage headless chrome to take screenshots of interactions to help automate testing. I have used Jest before React and use it with React.",
            buttonText: "Contact Me",
            icons: [Jest, Puppeteer],
        },
        {
            title: "Server Tools",
            content:
                "I use Docker for local environments and for deploying to cloud services like AWS or Digital Ocean. From time to time I do use Zeit if I wan't to deploy something really quick",
            buttonText: "Contact Me",
            icons: [Docker, DigitalOcean, Zeit, Aws, Jenkins, CloudFlare],
        },
    ],
};

export default function Tabs() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const tabContainerRef = useRef();

    useEffect(() => {
        fixTabContainerHeight();

        window.addEventListener("resize", () => {
            fixTabContainerHeight();
        });
    }, []);

    const getIcons = ({ icons }) =>
        icons.map((Icon, i) => (
            <div className="icon-wrap">
                <Icon key={i} />
            </div>
        ));

    const fixTabContainerHeight = () => {
        let tabContainer = tabContainerRef.current;
        let tabChildren = tabContainer.children;
        let height = 0;

        for (let i = 0; i < tabChildren.length; i++) {
            let child = tabChildren[i];
            height = height < child.offsetHeight ? child.offsetHeight : height;
        }

        setContainerHeight(height);
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
                            className={`tab-button ${
                                currentTabIndex === i ? "active" : ""
                            }`}
                            onKeyUp={(e) =>
                                e.key === "Enter" ? setCurrentTabIndex(i) : ""
                            }
                            onKeyDown={(e) => {
                                switch (e.key) {
                                    case "ArrowLeft":
                                        let setUp =
                                            i !== 0
                                                ? setCurrentTabIndex(i - 1)
                                                : null;
                                        break;
                                    case "ArrowRight":
                                        let blah =
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
                        position: "relative",
                        height: `${containerHeight}px`,
                    }}
                >
                    {json.tabContent.map((tabContent, i) => (
                        <TabContent
                            key={i}
                            active={currentTabIndex === i}
                            {...tabContent}
                        >
                            {(active) => (
                                <div className={`icons-list row ${active}`}>
                                    {getIcons(tabContent)}
                                </div>
                            )}
                        </TabContent>
                    ))}
                </div>
            </div>
        </div>
    );
}
