import React from 'react'
import { ResultAmount } from './ResultAmount'

export const Result = ({totals,resetAll,disabled}) => {
  return (
    <div className="result-wrapper">
    <div className="result-txt">
      <ResultAmount title={"tip"} texth2={"Tip Amount"} totals={totals.totalTip}/>
      <ResultAmount title={"total"} texth2={"Total"} totals={totals.total}/>
     {/*  <div className="text-amount">
        <div>
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <h3>$<span id="tip-amount">{totals.totalTip}</span></h3>
      </div>
      <div className="total-amount">
        <div>
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <h3>$<span id="total">{totals.total}</span></h3>
      </div> */}
    </div>
    <button type="button" id="reset-button" className="reset-button" onClick={resetAll} disabled={disabled}>RESET</button>
  </div>
  )
}
