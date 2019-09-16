import React, { useState} from 'react'
import Buttons from './Buttons'
import Display from './Display'
import { connect } from 'react-redux'
import { buttonPressed, lastPressed, display } from '../actions'
import { decideValue, checkValue } from '../utils'
import './styles.scss'

const Body = ({ lastValue, theEquation, buttonPressed, lastPressed, myDisplay, display }) => {
  console.log(theEquation)
  
  const buttonPush = (str) => {
    if(!checkValue(str)) return // only deal wiht nums and symbols
    const results = decideValue(str, lastValue)
    console.log(results)
    buttonPressed(str)
    lastPressed(str)
    display(str)
  }
  

  return (
    <div className="c-body">
      <h1>JS Calulator</h1>
      <Display display={myDisplay}/>
      <Buttons func={buttonPush} />
      
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    theEquation: state.equation,
    myDisplay: state.myDisplay,
    lastValue: state.lastPressed
  }
}
export default connect(mapStateToProps, { buttonPressed, lastPressed, display })(Body)
