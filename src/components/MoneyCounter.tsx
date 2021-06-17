import React, { useState, FC } from 'react';
import './MoneyCounter.css';

type MoneyCounterProps = {
  imagePath: string;
};
const MoneyCounter: FC<MoneyCounterProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="money-counter">
      <img src={props.imagePath} alt="image-of-money" />
      <div>
        <button className="btn" onClick={() => setCount(count + 1)}>
          ＋
        </button>
        {count}
        <button className="btn" onClick={() => setCount(count - 1)}>−</button>
      </div>
    </div>
  );
};

export default MoneyCounter;
