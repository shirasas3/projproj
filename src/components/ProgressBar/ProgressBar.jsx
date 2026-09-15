import progressCircle0 from "../../assets/progressCircle0.png";
import progressCircle20 from "../../assets/progressCircle20.png";
import progressCircle40 from "../../assets/progressCircle40.png";
import progressCircle60 from "../../assets/progressCircle60.png";
import progressCircle80 from "../../assets/progressCircle80.png";
import progressCircle100 from "../../assets/progressCircle100.png";
import './ProgressBar.css';

const ProgressBar = ({pageNum, subjectNum}) => {
  const progressCirclesArr = [progressCircle0, progressCircle20, progressCircle40, progressCircle60, progressCircle80, progressCircle100];
  const progressBarArr = [];

  let circle;
  let circleClass;

  if (subjectNum === 0) {
    circle = progressCirclesArr[pageNum+pageNum+1];
  } else {
    circle = progressCirclesArr[pageNum];
  }

  for (let i = 0; i < subjectNum; i++) {
    progressBarArr.push(progressCirclesArr[5]);
  }

  for (let i = 0; i < 4 - subjectNum; i++) {
    progressBarArr.push(progressCirclesArr[0]);
  }

  progressBarArr[subjectNum] = circle;
  
  circleClass = `circle${subjectNum+1} circle`;

  return (
    <div className="progressBar">
      {subjectNum === 0 && <div className="progressLine progressLine1"></div>}
      {subjectNum === 1 && <div className="progressLine progressLine2"></div>}
      {subjectNum === 2 && <div className="progressLine progressLine3"></div>}
      {subjectNum === 3 && <div className="progressLine progressLine4"></div>}
      <div className="circles">
        <img src={progressBarArr[0]} className={circleClass}/>
        <img src={progressBarArr[1]} className={circleClass}/>
        <img src={progressBarArr[2]} className={circleClass}/>
        <img src={progressBarArr[3]} className={circleClass}/>
      </div>
    </div>
  )
}

export default ProgressBar