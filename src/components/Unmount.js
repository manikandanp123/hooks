import React, { useState, useEffect, useRef } from "react";

const Unmount = () => {
  const [count, setCount] = useState(0);
  const time = useRef();

  useEffect(() => {
    time.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(time.current);
    };
  }, []);
  return (
    <div>
      <p> Unmount</p>
      <p> count - {count} </p>
      <p> {time.current} </p>
      <button onClick={() => clearInterval(time.current)}>stop </button>
    </div>
  );
};

export default Unmount;
