import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import NavButtons from "../NavButtons/NavButtons";
import examinations from "../../data.js"; 
import progressCircle0 from "../../assets/progressCircle0.png";
import progressCircle20 from "../../assets/progressCircle20.png";
import progressCircle40 from "../../assets/progressCircle40.png";
import progressCircle60 from "../../assets/progressCircle60.png";
import progressCircle80 from "../../assets/progressCircle80.png";
import progressCircle100 from "../../assets/progressCircle100.png";
import "./Explanations.css";
import defenitionOff from "../../assets/defentionIconOff.png"
import defenitionOn from "../../assets/defenitionIconOn.png"
import DefenitionsPage from "..//DefenitionsPage/DefenitionsPage"
import logo from "../../assets/logo.png"
import animation from "../../assets/animation.gif"
import flow from "../../assets/flowchartReflected.png"
import flowchartTreeDOM from "../../assets/flowchartTreeDOM.png"
import flowchartDOM from "../../assets/flowchartDOM.png"
import xssIntroductionChart from "../../assets/xssIntroductionChart.png"

// <script>alert(1)</script>

const Explanations = ({pageNum, subjectNum, nextLevel, lastLevel, setIsDefenitions, setOpeningOrClosingPage, OpeningOrClosingPage}) => {
    const data = examinations;
    
    return (
        <div className="backgroundImg">
            <img src={defenitionOff} id="defenition" className="defenition" onClick={()=>setIsDefenitions(true)} onMouseOver={e => (e.currentTarget.src = defenitionOn)} onMouseOut={e => (e.currentTarget.src = defenitionOff)}></img>
            <img src={logo} className="logo"></img>
            {data[subjectNum][pageNum].key === 1 &&
                <img className="xssIntroductionChart"></img>
            }
            {data[subjectNum][pageNum].key === 4 &&
                <img className="Gif"></img>
            }
            {data[subjectNum][pageNum].key === 5 &&
                <img className="flow"></img>
                }
            
            {data[subjectNum][pageNum].key === 14 &&
                    <img className="flowchartTreeDOM"></img>
                }
            {data[subjectNum][pageNum].key === 14 || data[subjectNum][pageNum].key === 17 || data[subjectNum][pageNum].key == 4|| data[subjectNum][pageNum].key === 1?
                <div>
                    <p className="text14">{data[subjectNum][pageNum].text}</p> 
                </div>:
                <p className="text">{data[subjectNum][pageNum].text}</p>
                }
            {data[subjectNum][pageNum].key === 17 &&
                <img className="flowchartDOM"></img>}        
            <h1 className="title">{data[subjectNum][pageNum].title}</h1>
            <NavButtons nextLevel={nextLevel} lastLevel={lastLevel} />
            <ProgressBar pageNum={pageNum} subjectNum={subjectNum}/>
            {/* {subjectNum === 2 && pageNum === 4 && 
                setStartSimulation(true)} */}
        </div> 
    )
}


export default Explanations
