import React from "react";
import Child from "./Child";

export const Parent = () => {
  return (
    <div>
      <h1>Use Context Hook</h1>
      <div className="card">
        <Child/>
      </div>
    </div>
  );
};
