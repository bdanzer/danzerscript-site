import React, { Suspense } from "react";

import { ReactComponent as NextJSIcon } from "../../../public/svgs/nextjs.svg";
import { ReactComponent as JavaScriptIcon } from "../../../public/svgs/javascript.svg";
import { ReactComponent as ReduxIcon } from "../../../public/svgs/redux.svg";
import { ReactComponent as ReactIcon } from "../../../public/svgs/react.svg";
import { ReactComponent as VueIcon } from "../../../public/svgs/vue.svg";
import { ReactComponent as StencilIcon } from "../../../public/svgs/stencil.svg";
import { ReactComponent as TypeScriptIcon } from "../../../public/svgs/typescript.svg";

import Button from "../button/button";
import ContentArea from "../content-area/content-area";

export default function TabContent(props) {
  const { active } = props;

  return (
    <div className={`tab-right-wrap tab-content ${active ? "active" : ""}`}>
      <div className="row">
        <div className="col-2 content-area-container">
          <ContentArea {...props} />
        </div>
        <div className="col-2 align-items-center">
          <div class="icons-list row">
            <div className="icon-wrap">
              <JavaScriptIcon />
            </div>
            <div className="icon-wrap">
              <ReactIcon />
            </div>
            <div className="icon-wrap">
              <ReduxIcon />
            </div>
            <div className="icon-wrap">
              <StencilIcon />
            </div>
            <div className="icon-wrap">
              <TypeScriptIcon />
            </div>
            <div className="icon-wrap">
              <VueIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
