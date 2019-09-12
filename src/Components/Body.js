import React, { useState} from 'react'
import Buttons from './Buttons'
import Display from './Display'
import './styles.scss'

const Body = () => {

  const [display, setDisplay] = useState('') 
  const [equation, setEquation] = useState([])

  const buttonPush = str => {
    if(str === 'clear'){ // reset all
      setDisplay(0)
      setEquation([])
      return
    }
    let newChar = str // replace str if needed
    if (str === '✖'){
      newChar = '*'
    }
    if (str === '÷'){
      newChar = '/'
    }
    if (str === '➖'){
      newChar = '-'
    }

    if (str === '='){
      let arr = [...equation].join('')
      newChar = eval(arr).toFixed(4)
      setDisplay(newChar)
      setEquation([])
      return
    }
    setEquation([...equation, newChar])
    console.log(equation)
    
    setDisplay(str)
  }

  return (
    <div className="c-body">
      <h1>JS Calulator</h1>
      <Display display={display}/>
      <Buttons func={buttonPush} />
      
    </div>
  )
}

export default Body
