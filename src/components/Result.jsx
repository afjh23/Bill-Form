import React from 'react'
import { ResultAmount } from './ResultAmount'

export const Result = ({totals,resetAll,disabled}) => {
  return (
    <div className="result-wrapper">
    <div className="result-txt">
      <ResultAmount title={"tip"} texth2={"Tip Amount"} totals={totals.totalTip}/>
      <ResultAmount title={"total"} texth2={"Total"} totals={totals.total}/>
    </div>
    <button type="button" id="reset-button" className={`reset-button ${disabled ? 'disabled' : ''}`} onClick={resetAll} disabled={disabled}>RESET</button>
  </div>
  )
}
