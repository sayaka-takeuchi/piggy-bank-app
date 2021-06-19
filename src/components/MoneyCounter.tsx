import React, {useState, FC} from 'react';
import './MoneyCounter.css';
import {GrPowerReset} from "react-icons/all";

type MoneyCounterProps = {
  unit: number;
  sum: number;
  setSum: React.Dispatch<React.SetStateAction<number>>
};
const MoneyCounter: FC<MoneyCounterProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="money-counter">
      <div className={"d-flex"}>
        <p>¥{props.unit.toLocaleString(navigator.language, {maximumFractionDigits: 2})}</p>
        <p>{count}</p>
      </div>
      <div className={"money-counter__buttons"}>
        <div className={"counter"}>
          <button className="btn" onClick={() => {
            setCount(count + 1);
            props.setSum(props.unit + props.sum);
          }}>
            ＋
          </button>
          {count}
          <button className="btn" onClick={() => {
            setCount(count - 1)
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
  );
};

export default MoneyCounter;
