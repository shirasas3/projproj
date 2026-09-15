import starIcon from "../../assets/star.png"
import searchIcon from "../../assets/search.png"
import { useState } from "react";
import './StoredDefence.css';
import NavButtons from '../NavButtons/NavButtons';

const StoredDefence = ({setSubjectNum, setPageNum, setExplanations, setIsStored, isStored, nextLevel, lastLevel}) => {
  const [isRight, setIsRight] = useState(false);
  const [isWrong1, setIsWrong1] = useState(false);
  const [isWrong2, setIsWrong2] = useState(false);
  const [isWrong3, setIsWrong3] = useState(false);

  const answer = `Lorem Ipsum`;
  const question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.";
  

  const nextExc = () => {
    setPageNum(0);
    setSubjectNum(prev => prev + 1);
    setExplanations(true)
    setIsStored("false")
  }


  const lastExc = () => {
    setIsStored("attack")
  }


  return (
    <div className="StoredAttack">
        <h1 className="title">Lorem Ipsum</h1>
        <div className="questionCard">
            <h1>{question}</h1>
            {isRight ? <p className="string">const comment = getCommentFromDatabase(); document.getElementById("comments").<span className="correct">{answer}</span> = comment</p>
            :
            <p className="string">const comment = getCommentFromDatabase(); document.getElementById("comments").<span onClick={() => setIsRight(true)}>{answer}</span> = comment</p>}

        </div>
        <NavButtons nextLevel={nextExc} lastLevel={lastExc}/>
    </div>
  )
}




export default StoredDefence
