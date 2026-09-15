import { useState } from 'react';
// import OpenClosePage from `./components/OpenClosePage/OpenClosePage`;
// import Reflected from `./components/Reflected/Reflected`;
import StoredAttack from './components/StoredAttack/StoredAttack';
import StoredDefence from './components/StoredDefence/StoredDefence';
// import Dom from `./components/Dom/Dom.jsx`;
import Simulation from "./components/Simulation/Simulation";
// import DefenitionsPage from `./components/DefenitionsPage/DefenitionsPage`;
// import logo from './assets/logo.png';
import  Explanations from "./components/Explanations/Explanations";
import  OpenPage from "./components/OpenPage/OpenPage";
import ReflectedAttack from './components/ReflectedAttack/ReflectedAttack';
import './App.css';
import DefenitionsPage from './components/DefenitionsPage/DefenitionsPage';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NavButtons from './components/NavButtons/NavButtons';
import ReflectedDefence from './components/ReflectedDefence/ReflectedDefence ';
import ClosePage from "./components/ClosePage/ClosePage";
import StartSim from './components/StartSim/StartSim';

const App = () => {
  const [openingOrClosingPage, setOpeningOrClosingPage] = useState("opening");
  const [subjectNum, setSubjectNum] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [isDefenitions, setIsDefenitions] = useState(false);
  const [startSimulation, setStartSimulation] = useState(false);
  const [simulationLevel, setSimulationLevel] = useState(1);
  const [explanations, setExplanations] = useState(false)
  const [isReflected, setIsReflected] = useState("false")
  const [isStored, setIsStored] = useState("false")
  const [isDom, setIsDom] = useState(false)
  const [startTest, setStartTest] = useState(false)

  // const [isRight, setIsRight] = useState(false);


  const nextLevel = () => {
    if (subjectNum === 3 && pageNum === 4) {
       setStartSimulation(true);
       setExplanations(false);
    } else if (subjectNum === 0 && pageNum === 2) {
      setPageNum(0);
      setSubjectNum(prev => prev + 1);
    } else {
      if (pageNum === 4) {
        if (subjectNum === 1) {   
          setIsReflected("attack");  
          setExplanations(false)
        } else if (subjectNum === 2) {
          setIsStored("attack");
          setExplanations(false)
        // } else if (subjectNum === 3) {
        //   setIsDom(true);
        //   setExplanations(false)
        } else {
          setPageNum(0);
          setSubjectNum(prev => prev + 1);
        }
      } else {
        setPageNum(prev => prev + 1);
      }
    }
  };


  const lastLevel = () => {
    if (pageNum === 0 && subjectNum === 1) {
      setPageNum(2);
      setSubjectNum(prev => prev - 1);
    } else if (pageNum === 0) {
      setPageNum(4);
      setSubjectNum(prev => prev - 1);
      if (subjectNum === 2) { 
        setIsReflected("defence"); 
        setExplanations(false)
      } else if (subjectNum === 3) {
        setIsStored("defence");
        setExplanations(false)
      }
      // } else if (subjectNum === 3) {
      //   setIsDom(true);
      //   setExplanations(false)
      // }
    } else {
      setPageNum(prev => prev - 1);
    }
  };   

  return (
    <div className='App'>
    {openingOrClosingPage == "opening" && <OpenPage 
     setExplanations={setExplanations} 
     setOpeningOrClosingPage={setOpeningOrClosingPage}   
     />}
     {openingOrClosingPage == "closing" &&
      <ClosePage   
      setExplanations = {setExplanations}
      setStartest = {setStartTest}
      setPageNum = {setPageNum}
      setSubjectNum = {setSubjectNum}
      setOpeningOrClosingPage={setOpeningOrClosingPage}  
     />}
      {startSimulation && <StartSim
       setStartTest={setStartTest}
       />}

      {startTest && 
      <div>
        <Simulation 
        setPageNum = {setPageNum}
        setSubjectNum= {setSubjectNum}
        setExplanations= {setExplanations}
        setStartTest= {setStartTest}
        setStartSimulation = {setStartSimulation}
        setOpeningOrClosingPage = {setOpeningOrClosingPage}/>
        </div>}

      {isDefenitions ? <DefenitionsPage setIsDefenitions={setIsDefenitions}/> : <div>
      {explanations &&
          <div>
           <Explanations 
                pageNum={pageNum}
                subjectNum={subjectNum}
                nextLevel={nextLevel}
                lastLevel={lastLevel}
                setIsDefenitions={setIsDefenitions}
                setOpeningOrClosingPage = {setOpeningOrClosingPage}
                // setStartSimulation = {setStartSimulation}
          />
          </div>} 
          
     </div>}
      { isReflected === "attack" && <div>
  <ReflectedAttack
      setPageNum={setPageNum}
      setSubjectNum={setSubjectNum}
      setExplanations={setExplanations}
      nextLevel={nextLevel}
      lastLevel={lastLevel}
      setIsReflected={setIsReflected}
      isReflected = {isReflected}
      />
      <ProgressBar pageNum={pageNum} subjectNum={subjectNum}/>
      </div>} 
      { isStored === "attack" && <div>
  <StoredAttack
      setPageNum={setPageNum}
      setSubjectNum={setSubjectNum}
      setExplanations={setExplanations}
      nextLevel={nextLevel}
      lastLevel={lastLevel}
      setIsStored={setIsStored}
      isStored = {isStored}
      />
      <ProgressBar pageNum={pageNum} subjectNum={subjectNum}/>
      </div>}
      {isReflected === "defence" && <div>
        <ReflectedDefence 
      setPageNum={setPageNum}
      setSubjectNum={setSubjectNum}
      setExplanations={setExplanations}
      nextLevel={nextLevel}
      lastLevel={lastLevel}
      setIsReflected={setIsReflected}
      isReflected = {isReflected}

      />
      <ProgressBar pageNum={pageNum} subjectNum={subjectNum}/>
      </div>}
      {isStored === "defence" && <div>
        <StoredDefence 
      setPageNum={setPageNum}
      setSubjectNum={setSubjectNum}
      setExplanations={setExplanations}
      nextLevel={nextLevel}
      lastLevel={lastLevel}
      setIsStored={setIsStored}
      isStored = {isStored}

      />
      <ProgressBar pageNum={pageNum} subjectNum={subjectNum}/>
      </div>}

    </div>
     
  )}
export default App
