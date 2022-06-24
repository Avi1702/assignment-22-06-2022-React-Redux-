// import React from "react"
import { Add_Todo } from "./action"

// import store from "./store"

const reducer=(store,{type,payload})=>{

  switch(type)
{
  case Add_Todo:
    // console.log(store.todos)
    return{
        // console.log(...store),
      
     ...store,
     todos: [...store.todos,payload]
      
    };

    default:
      return store;
   


  }
}

export default reducer