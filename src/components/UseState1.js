import React, { useState,useEffect } from "react";

const UseState1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [person, setPerson] = useState({ name: "", age: "", address: "" });
  const [object,setObject]=useState({});

  function incre() {
    // setCount(count+1)
    setCount((prev) => prev + 1);
  }
  useEffect(()=>{
    console.log('useeffect');
    let obj1 = {name:"mani",age:24};
    setObject({...object,...obj1});
  },[]);
  console.log(object);
  
  return (
    <div>
      {object.name?(<h1> {object.name} </h1>):(<h1> HI </h1>) }   
      <p style={{color:"red"}}> UseState1</p>
      <p> count= {count} </p>
      <button onClick={() => incre()}>Increment </button>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <p> Name - {name} </p>
      <p> person Name - {person.name} </p>
      <p>person age - {person.age} </p>
      <p>person address - {person.address} </p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        onChange={(e) => setPerson({...person,name:e.target.value})}
        placeholder="personName"
      />
      <input
        type="text"
        onChange={(e) => setPerson({...person,age:e.target.value})}
        placeholder="personAge"
      />
      <input
        type="text"
        onChange={(e) => setPerson({...person,address:e.target.value})}
        placeholder="personAddress"
      />
    </div>
  );
};

export default UseState1;
