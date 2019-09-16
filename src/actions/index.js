export const BUTTON_PRESSED = 'BUTTON_PRESSED'
export const LAST_PRESSED = 'LAST_PRESSED'
export const DISPLAY = 'DISPLAY'

export function display(value) {
  return {
    type: DISPLAY,
    payload: value
  }
}

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