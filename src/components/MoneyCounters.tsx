import React, {useState} from 'react';
import MoneyCounter from '../components/MoneyCounter';
import './MoneyCounters.css';
import NumberFormat from 'react-number-format';
import CurrentStatus from "./CurrentStatus";

const MoneyCounters = () => {
  const [sum, setSum] = useState<number>(0);
  return (
    <>
      <CurrentStatus />
      <div className="money-counters row">
        <MoneyCounter unit={10000} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={5000} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={1000} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={500} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={100} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={50} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={10} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={5} setSum={setSum} sum={sum}/>
        <MoneyCounter unit={1} setSum={setSum} sum={sum}/>
      </div>
      <NumberFormat
        displayType={"text"}
        thousandSeparator={true}
        value={1000}
        prefix={"¥"}
        className={"selected-total-amount"}/>
      <hr/>
      <div className={"d-flex justify-content-center"}>
        <button type="button" className="btn btn-danger mr-3" onClick={() => setSum(0)}>全てリセット</button>
        <input className="btn btn-primary" type="submit" value="送信"/>
      </div>

    </>
  );
};

export default MoneyCounters;
