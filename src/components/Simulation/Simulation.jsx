import SimulationWebsite from "../SimulationWebsite/SimulationWebsite";
import './Simulation.css';


const Simulation = ({setOpeningOrClosingPage,setStartSimulation, setPageNum, setSubjectNum ,setStartTest, setExplanations}) => {
  return (
    <div className="Simulation">
          {setStartSimulation(false)}
      <h1 className='titleSim'> Lorem Ipsum</h1>
      <p className="instuctions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.</p>
        <SimulationWebsite 
         setPageNum = {setPageNum}
         setSubjectNum= {setSubjectNum}
         setExplanations= {setExplanations}
         setStartTest= {setStartTest}
         setOpeningOrClosingPage = {setOpeningOrClosingPage}
        />
    </div>
  );
}

export default Simulation