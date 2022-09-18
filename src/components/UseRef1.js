import React, { useEffect, useState, useRef } from "react";

const UseRef1 = () => {
  const [name, setName] = useState("");
  const nameRef = useRef("");
  const inputref = useRef();
  const count = useRef(0);
  function focus() {
    inputref.current.focus();
    console.log("Name ref", nameRef.current);
  }
  useEffect(() => {
    count.current = count.current + 1;
    nameRef.current = name;
  }, [name]);

  return (
    <div>
      <p style={{ color: "red" }}> UseRef1</p>
      <p> normal name - {name} </p>
      <p> use ref name - {nameRef.current} </p>
      <input
        ref={inputref}
        onChange={(e) => setName(e.target.value)}
        placeholder="name in normal input "
      />
      <input
        ref={inputref}
        onChange={(e) => (nameRef.current = e.target.value)}
        // value={nameRef.current}
        placeholder="name in useref"
      />
      <p> i have render {count.current} times </p>
      <button onClick={() => focus()}> Focus </button>
    </div>
  );
};

export default UseRef1;
