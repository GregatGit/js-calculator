import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import Buttons from './Buttons'
import Display from './Display'
import { nums, symbols, startOfSum, mathSymbols } from '../utils'
import './styles.scss'

const Body = () => {
  const [display, setDisplay] = useState('') // what is shown
  const [equation, setEquation] = useState([])
  const [join, setJoin] = useState(false) // a flag for nums > 1 char
  
  const buttonPush = str => {
    let newChar = str // replace str if needed

    if (str === 'clear') {
      // reset all
      setDisplay('')
      setEquation([])
      setJoin(false)
      return
    }

    if (str === '.') { // no extra decimals
      if (equation.length > 0) {
        let temp = equation[equation.length - 1]
        if (temp.indexOf('.') !== -1) return
      }
    }

    if (equation.length === 0) {
      console.log('d', display)
      // must start with one of these
      if (startOfSum.indexOf(str) === -1 && display === '') return
      if (mathSymbols.indexOf(str) !== -1){
        console.log('boooo')
        const startArr = [display]
        setEquation([...startArr, str])
        return
      }
    }

    if (str === '0') {
      // make sure 0 is ok no 00
      if (equation[equation.length - 1] === '0' || equation.length === 0) return
    }

    if (str === '=') {
      // do the sum once = is pressed
      let checkForSymbol = equation[equation.length - 1]
      if (symbols.indexOf(checkForSymbol) !== -1) {
        setEquation([...equation, display])
      }
      let arr = [...equation].join('')
      newChar = evaluate(arr).toFixed(4)
      newChar = parseFloat(newChar) // remove trailing 000
      newChar = newChar.toString() // turn back to string
      setDisplay(newChar)
      setEquation([])
      setJoin(false)
      return
    }

    if (nums.indexOf(str) !== -1) {
      // if num is pushed
      let finalNum = str
      const newArr = [...equation]
      if (join) {
        let lastNum = newArr.pop()
        finalNum = lastNum + str
      }
      setEquation([...newArr, finalNum])
      setJoin(true)
      setDisplay(finalNum)
      return
    }

    if (str === '+') {
      // if (last === '-' || last === '/' || last === '*' || last === '+'){
      //   newArr.pop()
      // }
      setJoin(false)
    }

    if (str === '✖') {
      // if (last === '-' || last === '/' || last === '*' || last === '+'){
      //   newArr.pop()
      // }
      newChar = '*'
      setJoin(false)
    }
    if (str === '÷') {
      newChar = '/'
      setJoin(false)
    }
    if (str === '➖') {
      newChar = '-'
      setJoin(false)
    }

    setEquation([...equation, newChar])
    if (symbols.indexOf(newChar) !== -1) return
    setDisplay(str)
  }

  return (
    <div className="c-body">
      <h1>JS Calulator</h1>
      <Display display={display} />
      <Buttons func={buttonPush} />
    </div>
  )
}

export default Body
