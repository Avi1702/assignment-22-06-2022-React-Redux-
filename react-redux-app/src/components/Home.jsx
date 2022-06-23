import React from "react";
import {v4 as uuid} from "uuid";
import { useDispatch } from "react-redux"
import { AddTodo } from "../Redux/action"


const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
   const dispatch=useDispatch()

  const handleAdd=()=>{
   
   const payload={
      title:inputValue,
      status:false,
      id:uuid()
    };

    dispatch(AddTodo(payload));
  }
  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) =>setInputValue(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default Home;
