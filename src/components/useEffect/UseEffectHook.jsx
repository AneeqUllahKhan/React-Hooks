import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });
  return (
    <div>
      <h1>Use Effect Hook</h1>
      <div className="card">
        <h4>
          The size of the window is <span> {widthCount} </span>
        </h4>
      </div>
    </div>
  );
};

export default UseEffectHook;
