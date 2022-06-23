// import logo from './logo.svg';
// import './App.css';
import Home from "./components/Home";
import Item from "./components/Todo_Item"
import Navbar from "./components/navbar"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Todo_Item" element={<Item />}></Route>
       </Routes>
    </div>
  );
}

export default App;
