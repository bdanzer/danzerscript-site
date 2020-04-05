import React from "react";

export default function ProgressLine({ progress, classes }) {
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
