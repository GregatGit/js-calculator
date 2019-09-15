import { combineReducers } from 'redux'
import equation from './reducer_equation'
import lastPressed from './reducer_lastPressed'

const rootReducer = combineReducers({
  equation,
  lastPressed
})

export default rootReducer
