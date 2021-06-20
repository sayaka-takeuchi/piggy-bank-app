import React, {useState} from 'react';
import MoneyCounter from '../components/MoneyCounter';
import './MoneyCounters.css';
import CurrentStatus from "./CurrentStatus";
import RenderNumberFormat from "./RenderNumberFormat";
import {UnitOfMoney} from "../models/unit.model";

const MoneyCounters = () => {
  const [sum, setSum] = useState<number>(0);
  return (
    <>
      <CurrentStatus/>
      <div className="money-counters row">
        {UnitOfMoney.map(unit => (
          <MoneyCounter unit={unit} setSum={setSum} sum={sum}/>
        ))}
      </div>
      <RenderNumberFormat value={2500} className={"selected-total-amount"}/>
      <hr/>
      <div className={"d-flex justify-content-center"}>
        <button type="button" className="btn btn-danger mr-3" onClick={() => setSum(0)}>全てリセット</button>
        <input className="btn btn-primary" type="submit" value="送信"/>
      </div>

    </>
  );
};

export default MoneyCounters;
