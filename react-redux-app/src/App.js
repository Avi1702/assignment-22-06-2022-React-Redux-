// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails"
import Navbar from "./components/navbar"
import {Routes,Route} from "react-router-dom"
import styled from "styled-components"
// import TodoItem from "./components/Todo_Item"


const Wrapper=styled.div`
width:50%;
margin:auto;
text-align:center;
`

function App() {
  return (
    <Wrapper className="App">

    <Navbar />

     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Home/:productId" element={<ItemDetails />}></Route>
      </Routes>
     
     
 
    </Wrapper>
  );
}

export default App;
