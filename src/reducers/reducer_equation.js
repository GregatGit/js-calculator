import { BUTTON_PRESSED, REPLACE_LAST_ENTRY } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case BUTTON_PRESSED:
      return [...state, action.payload]

    case REPLACE_LAST_ENTRY:
      const alteredState = [...state]
      alteredState.pop()
      alteredState.push(action.payload)
      return alteredState

    default:
      return state
  }
}
