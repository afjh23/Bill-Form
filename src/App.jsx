import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { GeneralWrapper } from './components/GeneralWrapper'



const empty_values = {
  bill: 0,
  people: 1,
  tip: 0,
}
const empty_totals = {
  totalTip: 0,
  total: 0,
}
function App() {

  const [values, setValues] = useState(empty_values)
  const [ totals, setTotals ] = useState(empty_totals)
  const [beZero, setBeZero] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(true);



  const resetAll = () => {
    setValues(empty_values)
    setTotals(empty_totals)
    setInputValue('')
    setDisabled(true)
  }



  const computeTotals = () => {
    const { tip, bill, people } = values
    if (tip != 0 && bill != 0 && people > 0) {
      const totalTip = (bill * (tip / 100)) / people
      const total = (bill / people) + totalTip
      setTotals({ totalTip, total })
      setDisabled(false)
    }

  }

  useEffect(() => {
    if(values.people<=0) setBeZero(!beZero)
    else{
      computeTotals()
      setBeZero(false)
  }
    
  }, [values])

  const handleValues = (e) => {
    const target = e.target
    if(target.tagName==='BUTTON'){
      setInputValue('')}
      else if (target.name === 'tip' && target.type === 'number') {
        setInputValue(target.value) // actualiza el valor del estado inputValue cuando se escribe algo en el input de custom tip
      }

    setValues({ ...values, [target.name]: parseFloat(target.value) })
  }

  return (
    <>
      <Header></Header>
    <GeneralWrapper values={values}
        totals={totals}
        beZero={beZero}
        inputValue={inputValue}
        disabled={disabled}
        handleValues={handleValues}
        resetAll={resetAll}
    
    ></GeneralWrapper>

      


    </>
  )
}

export default App
