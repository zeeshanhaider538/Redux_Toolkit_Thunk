import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  IncrementBy10,
} from "./Redux/Slices/counterSlice";

function App() {
  const store = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log(store);
  const handleAsyncIncrement = () => {
    dispatch(IncrementBy10(10)); // Increment by 10 after a delay
  };
  return (
    <>
      <h1>Hwloe</h1>
      <div style={{ margin: "1rem" }}>{store}</div>
      <button style={{ margin: "1rem" }} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button style={{ margin: "1rem" }} onClick={handleAsyncIncrement}>
        IncrementBy10
      </button>
      <button style={{ margin: "1rem" }} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button style={{ margin: "1rem" }} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </>
  );
}
export default App;
