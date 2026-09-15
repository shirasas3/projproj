import { useState } from "react";
import navBtn from "../../assets/navBtn.png";
import Explanations from "../Explanations/Explanations";
import './NavButtons.css';

const NavButtons = ({lastLevel, nextLevel}) => {

  return (
    <>
    <div  onClick={()=>nextLevel()}>
      <img src={navBtn} id="next" className="next"></img>
      <span className="frontText">Next</span>
    </div>
    <div onClick={()=>lastLevel()}>
      <img src={navBtn} id="back" className="back" ></img>
      <span className="backText">Back</span>
    </div>
    </>
  )
}


export default NavButtons
