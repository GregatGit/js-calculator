import { LAST_PRESSED } from '../actions'


export default function (state = 'empty', action) {
  switch (action.type) {
    case LAST_PRESSED:
        return action.payload
  
    default:
      return state
  }
}