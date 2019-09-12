import React, { useState} from 'react'
import Buttons from './Buttons'
import Display from './Display'
import './styles.scss'

const Body = () => {

  const [input, setInput] = useState('')

  const buttonPush = str => {
    if(str === 'clear'){
      setInput(0)
    }else {
    setInput(str)}
  }

  return (
    <div className="c-body">
      <h1>JS Calulator</h1>
      <Display input={input}/>
      <Buttons func={buttonPush} />
      
    </div>
  )
}

export default Body
