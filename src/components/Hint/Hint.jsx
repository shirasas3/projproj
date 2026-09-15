import { useState } from 'react';
import hint from "../../assets/hint.png";
import xIcon from "../../assets/x.png";
import './Hint.css';

const Hint = (props) => {
  const [hintsArr, setHintsArr] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod scelerisque tristique."
  ]);

  return (
    <div className = "Hint">
        <img src = {xIcon} alt = "x icon" className = "xIcon"/>
        <p>{hintsArr[props.level - 1]}</p>
    </div>
  )
}

export default Hint