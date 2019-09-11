import React from 'react'
import Buttons from './Buttons'
import Display from './Display'
import './styles.scss'

const Body = () => {
  const buttonPush = str => {
    console.log(str)
  }
  return (
    <div className="c-body">
      <h1>JS Calulator</h1>
      <Display />
      <Buttons func={buttonPush} />
      
    </div>
  )
}

export default Body
