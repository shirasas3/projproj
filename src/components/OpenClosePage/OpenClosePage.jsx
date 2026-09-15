import { useState } from "react"
import Explanations from "../Explanations/Explanations";
import "./OpenClosePage.css";
import logo from "../../assets/logo.png"
import progressBarPic from "../../assets/progressBarPic.png"
import defenitionOff from "../../assets/defentionIconOff.png"
import defenitionOn from "../../assets/defenitionIconOn.png"
const OpenClosePage = ({setExplanations}) => {


       
    return (
        <div className="backgroundImgStart">
            <img src={logo} className="logo"></img>
            <button className="StartBtn BigBtn"><span className="defBtnText" onClick={()=>setExplanations(true)}>התחל את הלומדה  </span> </button>
            <h1 className="titleStart">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</h1>
            <p className="textStart">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.
            </p>
            <img className="DefIconStart"src={defenitionOff}></img>
            <p className="textStart2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</p>
            <img className="progressBarPic" src={progressBarPic}/>
        </div>
    )
}


export default OpenClosePage
