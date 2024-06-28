import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../redux/slice";
//create error functional component

const Test = () => {
  const dispatch = useDispatch();
  const test = useSelector((store) => store.test.isClicked);
  console.log(test);

  return (
    <div>
      <h1 style={{ color: "black" }}>Test page {test}</h1>
      <button onClick={() => dispatch(updateState(!test))}>updatestate</button>
    </div>
  );
};
export default Test;
