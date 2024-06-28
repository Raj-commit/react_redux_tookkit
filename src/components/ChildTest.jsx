import React from "react";
import { useSelector } from "react-redux";
import store from "../redux/store";
//create error functional component

const ChildTest = () => {
  const test = useSelector((store) => store.test.isClicked);
  console.log(test);
  return (
    <div>
      <h1>Test Chile { test}</h1>
    </div>
  );
};
export default ChildTest;
