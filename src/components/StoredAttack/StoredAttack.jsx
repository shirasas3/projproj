import starIcon from "../../assets/star.png"
import searchIcon from "../../assets/search.png"
import { useState } from "react";
import './StoredAttack.css';
import NavButtons from '../NavButtons/NavButtons';

const StoredAttack = ({setSubjectNum, setPageNum, setExplanations, setIsStored, isStored, nextLevel, lastLevel}) => {
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
    setIsStored("defence")
  }

  const lastExc = () => {
    setExplanations(true)
    setIsStored(false)
  }


  return (
    
    <div className="StoredAttack">
        <h1 className="title">Lorem Ipsum</h1>
        <div className="questionCard">
            <h1>{question}</h1>
            <div className="answers">
                {isWrong1 ? <button className="answer1 answer wrong">
                    <img src={searchIcon} className="search icon"/>
                    {string2}
                    <img src={starIcon} className="star icon"/>
                </button> : <button className="answer1 answer" onClick={() => setIsWrong1(true)}>
                    <img src={searchIcon} className="search icon"/>
                    {string2}
                    <img src={starIcon} className="star icon"/>
                </button>}


                {isWrong2 ? <button className="answer2 answer wrong">
                    <img src={searchIcon} className="search icon"/>
                    {string1}
                    <img src={starIcon} className="star icon"/>
                </button> : <button className="answer2 answer" onClick={() => setIsWrong2(true)}>
                    <img src={searchIcon} className="search icon"/>
                    {string1}
                    <img src={starIcon} className="star icon"/>
                </button>}

                {isWrong3 ? <button className="answer3 answer wrong">
                    <img src={searchIcon} className="search icon"/>
                    {string4}
                    <img src={starIcon} className="star icon"/>
                </button> : <button className="answer3 answer" onClick={() => setIsWrong3(true)}>
                    <img src={searchIcon} className="search icon"/>
                    {string4}
                    <img src={starIcon} className="star icon"/>
                </button>}

                {isRight ?
                    <button className="correct answer answer4">
                        <img src={searchIcon} className="search icon"/>
                        {string3}
                        <img src={starIcon} className="star icon"/>
                    </button>
                    :
                    <button className="answer4 answer" onClick={() => setIsRight(true)}>
                        <img src={searchIcon} className="search icon"/>
                        {string3}
                        <img src={starIcon} className="star icon"/>
                    </button>
                }
            </div>
        </div>
        <NavButtons nextLevel={nextExc} lastLevel={lastExc}/>
    </div>
  )
}




export default StoredAttack
