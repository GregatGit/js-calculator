export const BUTTON_PRESSED = 'BUTTON_PRESSED'
export const LAST_PRESSED = 'LAST_PRESSED'

export function lastPressed(value) {
  return {
    type: LAST_PRESSED,
    payload: value
  }
}

export function buttonPressed(value) {
  return {
    type: BUTTON_PRESSED,
    payload: value
  }
}