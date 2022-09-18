import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect1 = () => {
  const [datas, setData] = useState([]);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  let timer = setTimeout(() => {
    setTime((prev) => prev + 1);
  }, 3000);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
    setCalc(() => count * 2);
    return () => {
      clearTimeout(timer);
    };
  }, [count]); // dependencies
  console.log( "data - ",datas);
  function buttonClicked() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <p style={{color:"red"}} > UseEffect1</p>
      <p> Time is {time} </p>
      <p> count = {count} </p>
      <p> calculation - {calc} </p>
      <button onClick={() => buttonClicked()}> count button </button>
      <p>
        {datas.slice(0).reverse().map((data, index) => {
          return (
            <div key={index}>
              <p>
                {data.id} - {data.title}
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default UseEffect1;
