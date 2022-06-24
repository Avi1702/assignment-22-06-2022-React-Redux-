import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
// import {Link} from "react-router-dom";
import styled from "styled-components"


const ItemDiv=styled.div`
display:flex;
// margin-top:50px;
width:100%;
padding:10px;
justify-content:space-around;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const TodoItem = () => {



  let [toggle,setToggle]=React.useState(false)
  const navigate=useNavigate()

const [data,setData]=React.useState([])
  const {todos}=useSelector((state)=>state)


async function list(){
try{
const res=await fetch(`http://localhost:30001/todos`)
const result=await res.json()
setData(result)
  
}
catch(err){
  console.log(err)
}
}

 
React.useEffect(()=>{
list()
},[])

  function handleToggle(id){
   
   
   fetch(`http://localhost:30001/todos/${id}`)
  
   .then((res)=>res.json())
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
  
  }


function handleDelete(id){
  fetch(`http://localhost:30001/todos/${id}`,{
method:"DELETE"
  })
  // .then((res)=>res.json())
  // .then((res)=>{setData(res)})
  .catch((err)=>console.log(err))
  

}



  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px",marginTop:"50px"}}>
      {
        data.map((items)=>
        <ItemDiv key={items.id}>
         <div> {items.title}----{toggle?<span>completed</span>:<span>Not completed</span>}---</div>
        <div> <button onClick={()=>handleToggle(items.id)}>Toggle</button></div>
        <div><button>GetDetails</button></div>
        <div> <button onClick={()=>handleDelete(items.id)}>Delete</button></div>
        </ItemDiv>
        )
      }
     
    </div>
  );
};

export default TodoItem;
