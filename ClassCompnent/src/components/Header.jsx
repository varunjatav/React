import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
        <Link to={"/"}>Old</Link>
        <Link to={"/newCounter"}>New</Link>
    </header>
  )
}

export default Header