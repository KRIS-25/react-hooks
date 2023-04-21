import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("kris");

  const codeExample = text || "hello world";

  return (
    <>
      <h4>Falsy OR : {text || "hello word"}</h4>
      <h4>Falsy AND : {text && "hello word"}</h4>
      <h4>Truthy OR : {name || "hello word"}</h4>
      <h4>Truthy AND : {name && "hello word"}</h4>
      {codeExample}
    </>
  );
};
export default ShortCircuitOverview;
