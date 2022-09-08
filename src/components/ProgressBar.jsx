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
      <div className="progressVisualFull" style={{border: '1px solid black', borderRadius: '0.6vw'}}>
        <div style={{ width: width+'%'}} className="progressVisualPart" />
      </div>
    </>
  );
};

export default ProgressBar;
