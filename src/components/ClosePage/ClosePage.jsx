import { useState } from "react"
import Explanations from "../Explanations/Explanations";
import "./ClosePage.css";
import logo from "../../assets/logo.png"
import defenitionOff from "../../assets/defentionIconOff.png"
import defenitionOn from "../../assets/defenitionIconOn.png"
import progressBarPic from "../../assets/progressBarpic.png"
const ClosePage = ({setPageNum, setSubjectNum ,setStartest, setOpeningOrClosingPage}) => {
    const startOver = () => {
        setPageNum(0);
        setSubjectNum(0);
        setOpeningOrClosingPage("opening");
    };
        
    return (
        <div className="backgroundImgStart typingAnimation">
            {setStartest(false)}
            <img src={logo} className="logo"></img>
            <h1 className="titleStart animEnd">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.  </h1>
            <p className="textStart">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</p>
            <button className="StartBtn BigBtn"><span className="defBtnText" onClick={()=> startOver()}> START AGAIN  </span> </button>
        </div> 
    
    )
}

export default ClosePage
