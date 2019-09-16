import React from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { oneToNine } from '../actions'
const Buttons = ({ func, oneToNine, equation }) => {
  let lastNum = equation[equation.length - 1] || undefined
  return (
    <div>
      <div>
        <button className="c-button" value="7" onClick={() => oneToNine('7', lastNum)} id="seven" >7</button>
        <Button value="8" func={func} id="eight" />
        <Button value="9" func={func} id="nine" />
        <Button value="/" func={func} id="divide" />
      </div>
      <div>
        <Button value="4" func={func} id="four" />
        <Button value="5" func={func} id="five" />
        <Button value="6" func={func} id="six" />
        <Button value="*" func={func} id="multiply" />
      </div>
      <div>
        <Button value="1" func={func} id="one"/>
        <Button value="2" func={func} id="two"/>
        <Button value="3" func={func} id="three"/>
        <Button value="-" func={func} id="subtract"/>
      </div>
      <div>
        <Button value="0" func={func} id="zero" />
        <Button value="." func={func} id="decimal" />
        <Button value="=" func={func} id="equals" />
        <Button value="+" func={func} id="add" />
      </div>
      <div>
        <Button value="M" func={func}  id="memory" />
        <Button value="M+" func={func} id="memoryPlus" />
        <Button value="MR" func={func} id="memoryRecall" />
        <Button value="MC" func={func} id="memoryClear" />
      </div>
      <div>
        <Button value="clear" func={func} id="clear" />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    equation: state.equation
  }
}
export default connect(mapStateToProps, { oneToNine } )(Buttons)

