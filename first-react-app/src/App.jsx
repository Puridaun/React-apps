import { use, useState } from 'react'
import './App.css'

const App = () => {

  let [selectedRate, setSelectedRate] = useState(0)

  const isButtonClicked1 = () => {
    setSelectedRate(1);
  }
  const isButtonClicked2 = () => {
    setSelectedRate(2);
  }
  const isButtonClicked3 = () => {
    setSelectedRate(3);
  }
  const isButtonClicked4 = () => {
    setSelectedRate(4);
  }
  const isButtonClicked5 = () => {
    setSelectedRate(5);
  }

  return (
    <>
      <button onClick={isButtonClicked1} className={selectedRate === 1 ? 'selected-rate' : ''}>
        1
      </button>
      <button onClick={isButtonClicked2} className={selectedRate === 2 ? 'selected-rate' : ''}>
        2
      </button>
      <button onClick={isButtonClicked3} className={selectedRate === 3 ? 'selected-rate' : ''}>
        3
      </button>
      <button onClick={isButtonClicked4} className={selectedRate === 4 ? 'selected-rate' : ''}>
        4
      </button>
      <button onClick={isButtonClicked5} className={selectedRate === 5 ? 'selected-rate' : ''}>
        5
      </button>
    </>
  )
}

export default App
