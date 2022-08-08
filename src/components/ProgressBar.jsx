import React, { useEffect, useState } from "react";
import "./ProgressBar.scss";

const ProgressBar = (props = { percentage: "0%" }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(props.percentage);
    });
  }, [props]);

  return (
    <>
      <div className="progressVisualFull">
        <div style={{ width: width }} className="progressVisualPart" />
      </div>
    </>
  );
};

export default ProgressBar;
