import React, {useState, FC} from 'react';
import './MoneyCounter.css';
import {GrPowerReset} from "react-icons/all";
import NumberFormat from 'react-number-format';

type MoneyCounterProps = {
  unit: number;
  sum: number;
  setSum: React.Dispatch<React.SetStateAction<number>>
};
const MoneyCounter: FC<MoneyCounterProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="money-counter col-12 col-sm-6 col-md-4">
      <div className={"money-counter__contents"}>
        <div className={"money-counter__top"}>
          <NumberFormat
            thousandSeparator={true}
            prefix={"¥"}
            value={props.unit}
            displayType={"text"}
          />
          <p>{count}</p>
        </div>
        <NumberFormat
            thousandSeparator={true}
            prefix={"¥"}
            value={props.unit * count}
            displayType={"text"}
          />
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
    </div>
  );
};

export default MoneyCounter;
