import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const Child = () => {
  const TestData = useContext(AppContext);
  console.log(TestData)
  return (
    <div>
      Child Compoent <br /> My name is {TestData.name} and my age is {TestData.age}.
    </div>
  );
};

export default Child;