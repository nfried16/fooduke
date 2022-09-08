import React, { useEffect, useState } from "react";
import "./ProgressBar.scss";

const ProgressBar = ({percentage}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(percentage);
    });
  }, [percentage]);

  return (
    <>
      <div className="progressVisualFull">
        <div style={{ width: width+'%' }} className="progressVisualPart" />
      </div>
    </>
  );
};

export default ProgressBar;
