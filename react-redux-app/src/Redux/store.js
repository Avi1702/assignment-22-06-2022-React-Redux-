
// import React from "react"
import {legacy_createStore as createStore} from "redux"
import reducer from "./reducer"

const store=createStore(reducer,{todos:[]})
store.subscribe(()=>{
  console.log(store.getState())
})

export default store