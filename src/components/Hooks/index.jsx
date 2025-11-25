import React, { useState } from "react";
import { useEffect } from "react";

const Hooks = () => {
  // ///////////////////

//   const useTestState = (initialValue) => {
//     let state = initialValue;
//     const setState = (cb) => {
//       const newState = typeof cb === "function" ? cb(state) : cb;
//       state = newState;
//     };

//     return [state, setState];
//   };

//   const [test, setTest] = useTestState(0);

//   console.log('test: ', test);

//   setTest((prev) => prev + 10)

//   console.log('test: ', test);

  // /////////////////

  const printName = () => {
    return ["youesf", "harara"];
  };
  const [a, b] = printName();

  const getData = () => {
    console.log("From Handle Object ! New");
    return {
      counter1: 1,
      counter2: 2,
    };
  };

  const [user, setUser] = useState("");
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({
    user: "yousef",
    age: 19,
    major: "Front-end",
  });
  const [obj, setObj] = useState(getData);

  const handleOjbIn = () => {
    setObj((prev) => ({
      ...prev,
      counter1: prev.counter1 + 1,
    }));
  };

  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  };

  const handleEditObject = () => {
    setState((prev) => ({
      ...prev,
      newKey: "value",
    }));
  };

  useEffect(() => {
    console.log("Mounted !!");
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("timeout -----------------------");
    }, 500);

    return () => {
      console.log("UNmount !!");
      clearTimeout(timeout);
    };
  }, [obj.counter1, user]);

  return (
    <div>
      <button onClick={() => setUser("yousef")}>Show name</button>
      <p>Hi, {user} this part is important Hooks !!</p>
      <p>counter is : {counter}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleEditObject}>Handle to edit Object</button>
      <div>
        {Object.keys(state).map((user) => (
          <p key={user}>
            {user} - {state[user]}
          </p>
        ))}
      </div>
      <section>
        <h2>This is new !!</h2>
        <h3>{obj.counter1}</h3>
        <button onClick={handleOjbIn}>Increase</button>
      </section>
    </div>
  );
};

export default Hooks;
