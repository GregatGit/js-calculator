import { BUTTON_PRESSED, REPLACE_LAST_ENTRY, ONE_TO_NINE_ADD, ONE_TO_NINE_REPLACE } from '../actions'

export default function(state = [], action) {
  const alteredState = [...state]
  switch (action.type) {
    case BUTTON_PRESSED:
      return [...state, action.payload]

    case REPLACE_LAST_ENTRY:
      
      alteredState.pop()
      alteredState.push(action.payload)
      return alteredState

      case ONE_TO_NINE_ADD:
          return [...state, action.payload]

      case ONE_TO_NINE_REPLACE:
          alteredState.pop()
          alteredState.push(action.payload)
          return alteredState
    default:
      return state
  }
}
