import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState("Hello")[0];
  // const func = useState("Hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // you can pass anything so be careful.
  };

  return (
    <>
      <h4> You Clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
