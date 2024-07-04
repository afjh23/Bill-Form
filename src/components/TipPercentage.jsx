import React from 'react'

export const TipPercentage = ({handleValues,values}) => {
    const options = [5, 10, 15, 25, 50]
    return (
        <>

            {options.map(tp =>
                <li id="percentage-5" key={tp}>
                    <button type="button" name="tip" onClick={handleValues} className={`percentage-button ${values.tip === tp && 'active'}`} value={tp}>{tp}%</button>
                </li>
            )}
            {/* {options.map((percentage) => (
                <li key={percentage} id={`percentage-${percentage}`}><button type="button" className="percentage-button" value={percentage}>{percentage}%</button></li>
            ))} */}
        </>
    )
}
