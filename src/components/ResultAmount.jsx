import React from 'react'

export const ResultAmount = ({title, texth2, totals }) => {
  return (
    <div className={`${title}-amount"`}>
          <div>
            <h2>{texth2}</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id={title}>{totals}</span></h3>
        </div>
  )
}
