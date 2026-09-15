import { useState } from "react"
import Explanations from "../Explanations/Explanations";
import "./OpenPage.css";
import logo from "../../assets/logo.png"
import defenitionOff from "../../assets/defentionIconOff.png"
import defenitionOn from "../../assets/defenitionIconOn.png"
import progressBarPic from "../../assets/progressBarpic.png"
const OpenPage = ({ setExplanations, setOpeningOrClosingPage }) => {

    const handleClick = () => {
        setExplanations(true);
        setOpeningOrClosingPage("");
    };
        
    return (
        <div className="backgroundImgStart typingAnimation openPage">
            <img src={logo} className="logo"></img>
            <button className="StartBtnOpenPage BigBtn"><span className="defBtnText" onClick={()=>handleClick()}>Lorem Ipsum </span> </button>
            <h1 className="titleStart anim">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</h1>
            <p className="textStart">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.
            </p>
            <img className="DefIconStart"src={defenitionOff}></img>
            <p className="textStart2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</p>
            <img className="progressBarPic" src={progressBarPic}/>
        </div> 
    
    )
}

export default OpenPage
