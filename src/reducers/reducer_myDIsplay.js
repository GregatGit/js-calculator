import { DISPLAY } from '../actions'


export default function (state = 0, action) {
  switch (action.type) {
    case DISPLAY:
        return action.payload
 
  
    default:
      return state
  }
}