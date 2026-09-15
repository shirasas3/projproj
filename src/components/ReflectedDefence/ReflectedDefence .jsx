
import ProgressBar from "../ProgressBar/ProgressBar";
import NavButtons from "../NavButtons/NavButtons";
import starIcon from "../../assets/star.png"
import searchIcon from "../../assets/search.png"
import { useState } from "react";
import './ReflectedDefence.css';


const ReflectedDefence = ({ setSubjectNum, setPageNum, setExplanations, setIsReflected}) => {
  const [isRight, setIsRight] = useState(false);
  const [isWrong1, setIsWrong1] = useState(false);
  const [isWrong2, setIsWrong2] = useState(false);
  const [isWrong3, setIsWrong3] = useState(false);

  

  const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";
  const string2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";
  const string3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";
  const string4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";
  const question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";

  const nextExc = () => {
    setPageNum(0);
    setSubjectNum(prev => prev + 1);
    setExplanations(true)
    setIsReflected("false")
  }

  const lastExc = () => {
    setIsReflected("attack")
  }

  return (
    <div className="ReflectedDefence">
        <h1 className="title">Lorem Ipum</h1>
        <div className="questionCard">
            <h1>{question}</h1>
            <div className="answersReflectedDefence">


                {isWrong1 ? <button className="answer1ReflectedDefence answerReflectedDefence wrongReflectedDefence">
                    {string1}
                </button> : <button className="answer1ReflectedDefence answerReflectedDefence" onClick={() => setIsWrong1(true)}>
                    {string1}
                </button>}


                {isWrong2 ? <button className="answer2ReflectedDefence answerReflectedDefence wrongReflectedDefence">
                    {string2}
                </button> : <button className="answer2ReflectedDefence answerReflectedDefence" onClick={() => setIsWrong2(true)}>
                    {string2}
                </button>}

                {isRight ?
                    <button className="correctReflectedDefence answerReflectedDefence answer3ReflectedDefence">
                        {string3}
                    </button>
                    :
                    <button className="answer3ReflectedDefence answerReflectedDefence" onClick={() => setIsRight(true)}>
                        {string3}
                    </button>
                }

                {isWrong3 ? <button className="answer4ReflectedDefence answerReflectedDefence wrongReflectedDefence">
                    {string4}
                </button> : <button className="answer4ReflectedDefence answerReflectedDefence" onClick={() => setIsWrong3(true)}>
                    {string4}
                </button>}
            </div>
        </div>
        <NavButtons nextLevel={nextExc} lastLevel={lastExc}/>
    </div>
  )
}


export default ReflectedDefence


