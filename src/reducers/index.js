import { combineReducers } from 'redux'
import equation from './reducer_equation'
import lastPressed from './reducer_lastPressed'
import myDisplay from './reducer_myDIsplay'

const rootReducer = combineReducers({
  equation,
  lastPressed,
  myDisplay
})

export default rootReducer
