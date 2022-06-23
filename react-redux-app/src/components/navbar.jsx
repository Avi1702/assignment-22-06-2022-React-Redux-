import React from "react";
import { Link } from "react-router-dom";
// import {styled} from "styled-components"

// const Navbar_Div=styled.div`
// display:flex;
// justify-content:space-around;`

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Todo_Item">Item</Link>
    </div>
  );
};

export default Navbar;
