import React from 'react';
import MoneyCounter from '../components/MoneyCounter';
import { imgUrl } from '../helper.ts/url.helper';
import './MoneyCounters.css';

const MoneyCounters = () => {
  return (
    <>
      <h1>合計金額</h1>
      <div className="money-counters">
        <MoneyCounter imagePath={`${imgUrl}/10,000_yen_bill.png`} />
        <MoneyCounter imagePath={`${imgUrl}/5,000_yen_bill.png`} />
        <MoneyCounter imagePath={`${imgUrl}/1,000_yen_bill.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_500.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_100.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_50.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_10.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_5.png`} />
        <MoneyCounter imagePath={`${imgUrl}/money_coin_1.png`} />
      </div>
      <button>保存</button>
    </>
  );
};

export default MoneyCounters;
