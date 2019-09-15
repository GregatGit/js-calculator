import { BUTTON_PRESSED } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case BUTTON_PRESSED:
        return [...state, action.payload]
  
    default:
      return state
  }
}