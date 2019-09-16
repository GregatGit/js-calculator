export const BUTTON_PRESSED = 'BUTTON_PRESSED'
export const LAST_PRESSED = 'LAST_PRESSED'
export const DISPLAY = 'DISPLAY'
export const REPLACE_LAST_ENTRY = 'REPLACE_LAST_ENTRY'
export const ONE_TO_NINE_REPLACE = 'ONE_TO_NINE_REPLACE'
export const ONE_TO_NINE_ADD = 'ONE_TO_NINE_ADD'


export function oneToNine(value, lastValue) {
  let result = value
  if(lastValue !== 0 && parseFloat(lastValue) !== NaN){
    result = lastValue + value
    return {
      type: ONE_TO_NINE_REPLACE,
      payload: result
    }
  }
  return {
    type: ONE_TO_NINE_ADD,
    payload: result
  }
}

export function replaceLastEntry(value) {
  return {
    type: REPLACE_LAST_ENTRY,
    payload: value
  }
}

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