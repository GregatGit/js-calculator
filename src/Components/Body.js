import React from 'react'
import Buttons from './Buttons'
import Display from './Display'
import { connect } from 'react-redux'
import { replaceLastEntry, buttonPressed, lastPressed, display } from '../actions'
import { decideValue, checkValue } from '../utils'
import './styles.scss'

const Body = ({ replaceLastEntry, theEquation, buttonPressed, lastPressed, myDisplay, display, lastValue }) => {
   
  const buttonPush = (str) => {
    if(!checkValue(str)) return // only deal wiht nums and symbols
    const { actionRequired, replace, toDisplay, value } = decideValue(str, theEquation[theEquation.length - 1], lastValue)
  
    if(!actionRequired) return
    lastPressed(str)
    if(replace){
      replaceLastEntry(value)
    } else {
      buttonPressed(str)
    }
    if(toDisplay) {display(toDisplay)}
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
export default connect(mapStateToProps, { buttonPressed, lastPressed, display, replaceLastEntry })(Body)
