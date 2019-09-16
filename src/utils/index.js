export const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
export const startOfSum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
export const symbols = ['-', '+', '*', '/', '=']
const zeroNoGos = ['0']

const decimal = '.'
const zero = '0'

const all = [zero, ...nums, ...symbols, decimal]

// make sure we need to deal with it
export function checkValue(value) {
  return all.indexOf(value) !== -1
}

/*  takes the last pressed value
    compareds it to last entry in equation
    return an oject
    { 
      actionRequired: bool, // nothing may need to be done 
      replace: bool, // does it replace last entry
      display: str, // what shoudl be display or undefined
      value: str // what the new value is
    }
*/

export function decideValue(newValue, lastEntry, lastPress) {
  console.table({newValue, lastEntry})
  let actionRequired = false
  let replace = false
  let toDisplay = undefined
  let value = undefined
  switch (newValue) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      actionRequired = true
      if (nums.indexOf(lastPress) !== -1) {
        replace = true
        toDisplay = lastEntry + newValue
        value = lastEntry + newValue
      } else {
        toDisplay = newValue
        value = newValue
      }
      break

    default:
      break
  }

  return {
    actionRequired,
    replace,
    toDisplay,
    value,
  }
}

function handleMinus(symbol, arr, display) {
  if (arr.length === 0) return arr

  const lastInArr = arr[arr.length - 1]
  let newChar = symbol
  if (newChar === '➖') {
    newChar = '-'
  }
  if (lastInArr === '-' || lastInArr === '+') {
    arr[arr.length - 1] = newChar
    return arr
  }
  return [...arr, newChar]
}
