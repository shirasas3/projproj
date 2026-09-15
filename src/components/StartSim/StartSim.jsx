
import "./StartSim.css";
import logo from "../../assets/logo.png"
import Simulation from "../Simulation/Simulation";

const StartSim = ({setStartTest}) => {

        
    return (
        <div className="backgroundImgStart">  
            <img src={logo} className="logo"></img>
            <h1 className="titleStart1 animEnd">Lorem Ipsum </h1>
            <p className="textStart1">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</p>
            <button className="StartBtn1 BigBtn"><span className="defBtnText" onClick={()=>setStartTest(true)}>lorem Ipsum </span> </button>
        </div> 
    
    )
}

export default StartSim
