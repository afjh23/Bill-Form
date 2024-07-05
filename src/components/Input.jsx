import React from 'react'

export const Input = ({ name, defmin,handleValues,values,beZero }) => {
  const inputClassName = `input-${name} ${name === 'people' && beZero ? 'input-invalid' : ''}`;
  return (
    <>
      <label htmlFor={`input-${name}`}>
        <input className={inputClassName} id={`input-${name}`} type="number" name={name} value={values[name]}  min={defmin} onChange={handleValues}/>
        </label>


{/*       <label htmlFor="input-bill">
        <input className="input-bill" id="input-bill" type="number" name="bill" value={values.bill} min="0" onChange={handleValues} />
      </label>
      <label htmlFor="input-people">
        <input id="input-people" name='people' className="input-people" type="number"
          value={values.people} min="1" onChange={handleValues} />
      </label> */}
    </>


  )
}
