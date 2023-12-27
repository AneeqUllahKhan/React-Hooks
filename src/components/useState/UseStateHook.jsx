import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Use State Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
