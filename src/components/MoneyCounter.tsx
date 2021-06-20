import React, {useState, FC} from 'react';
import './MoneyCounter.css';
import {GrPowerReset} from "react-icons/all";
import RenderNumberFormat from "./RenderNumberFormat";

type MoneyCounterProps = {
  unit: number;
  sum: number;
  setSum: React.Dispatch<React.SetStateAction<number>>
};

const MoneyCounter: FC<MoneyCounterProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  const checkUnit = (isIncrement: boolean) => {
    if (isIncrement) {
      if (props.unit < 1000) {
        return "../audio/inCoin.mp3"
      } else {
        return "../audio/inBill.mp3"
      }
    } else {
      if (props.unit < 1000) {
        return "../audio/outCoin.mp3"
      } else {
        return "../audio/outBill.mp3"
      }
    }
  }

  const audioPlay = (is_increment: boolean) => {
    const audio = new Audio(checkUnit(is_increment))
    audio.play().then(() => {
      console.log("Audio started!")
    })
      .catch(error => console.warn(error))
  }

  return (
    <div className="money-counter col-12 col-sm-6 col-md-4">
      <div className={"money-counter__contents"}>
        <div className={"money-counter__top"}>
          <RenderNumberFormat value={props.unit}/>
          <p>{count}</p>
        </div>
        <RenderNumberFormat value={props.unit * count} />
        <div className={"money-counter__buttons"}>
          <div className={"counter"}>
            <button className="btn" onClick={() => {
              audioPlay(true);
              setCount(count + 1);
              props.setSum(props.unit + props.sum);
            }}>
              ＋
            </button>
            {count}
            <button className="btn" onClick={() => {
              audioPlay(false);
              setCount(count - 1);
              props.setSum(-props.unit + props.sum);
            }}>−
            </button>
            <GrPowerReset style={{cursor: "pointer"}} onClick={() => {
              props.setSum(props.sum - count * props.unit);
              setCount(0);
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyCounter;
