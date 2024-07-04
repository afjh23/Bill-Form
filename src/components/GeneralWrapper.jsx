import React from 'react'
import { BillForm } from './BillForm'
import { Result } from './Result'

export const GeneralWrapper = ({ values, totals, beZero, inputValue, disabled, handleValues, resetAll }) => {

  return (
    <div className="general-wrapper">
      <BillForm
        values={values}
        inputValue={inputValue}
        handleValues={handleValues}
        beZero={beZero}
        disabled={disabled}
      />
      <Result 
        totals={totals}
        resetAll={resetAll}
        disabled={disabled}
      />
    </div>
  )
}
