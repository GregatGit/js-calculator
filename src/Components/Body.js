import React, { useState} from 'react'
import Buttons from './Buttons'
import Display from './Display'
import './styles.scss'

const Body = () => {

  const [display, setDisplay] = useState('') // what is shown
  const [equation, setEquation] = useState([])
  const [join, setJoin] = useState(false) // a flag for nums > 1 char
  const nums = ['1','2','3','4','5','6','7','8','9', '0', '.']

  const buttonPush = str => {
    let newChar = str // replace str if needed
    if(str === 'clear'){ // reset all
      setDisplay(0)
      setEquation([])
      setJoin(false)
      return
    }
    if (str === '='){ // do the sum once = is pressed
      let arr = [...equation].join('')
      newChar = eval(arr).toFixed(4)
      setDisplay(newChar)
      setEquation([])
      setJoin(false)
      return
    }

    if (nums.indexOf(str) !== -1){ // if num is pushed
      let finalNum = str
      const newArr = [...equation]
      if (join){
        let lastNum = newArr.pop()
        finalNum = lastNum + str 
      }
      setEquation([...newArr, finalNum])
      setJoin(true)
      setDisplay(finalNum)
      return
    }

    
    
    if (str === '✖'){
      newChar = '*'
      setJoin(false)
    }
    if (str === '÷'){
      newChar = '/'
      setJoin(false)
    }
    if (str === '➖'){
      newChar = '-'
      setJoin(false)
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
