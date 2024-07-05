import React from 'react'
import { TipPercentage } from './TipPercentage'
import { Input } from './Input'

export const BillForm = ({values, inputValue, handleValues, beZero, disabled}) => {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <Input
      name={"bill"}
      defmin={0}
      handleValues={handleValues}
      values={values}
      
      />
      <h2>Select Tip %</h2>
      <ul>
        <TipPercentage handleValues={handleValues} values={values}/>
        <li>
          <input type="number" value={inputValue} name="tip" placeholder="Custom" id="custom-percentage-button" className="percentage-button" onChange={handleValues} /></li>
      </ul>
      <h2>Number of People</h2>
      {beZero && <label className='cantBZero'>Can't be zero</label>}
      <Input
      name={"people"}
      defmin={1}
      handleValues={handleValues}
      values={values}
      beZero={beZero} 
      
      />
    </div>
  )
}
