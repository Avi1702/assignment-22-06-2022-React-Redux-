import React from "react";
import { useSelector } from "react-redux";

const Item = () => {

  const {todos}=useSelector((state)=>state)
  // console.log(todos)
  return (
    <div>
      {
        todos.map((items)=>
        
        <p key={todos.id}>{items.title}</p>
        )}
    </div>
  );
};

export default Item;
