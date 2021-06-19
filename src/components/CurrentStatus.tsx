import React from "react";
import "./CurrentStatus.css"

const CurrentStatus = () => {
  return (
    <div className={"current-status row"}>
      <div className={"current-status__index col-4"}>
        <h1>合計金額</h1>
        <h2>目標貯金額</h2>
      </div>
      <div className={"current-status__total-amount col-4"}>
        <p>現在の貯金額</p>
      </div>
      <div className={"current-status__achievement-rate col-4"}>
        <p>%</p>
      </div>
    </div>
  )
}

export default CurrentStatus;
