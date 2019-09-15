export const nums = ['1','2','3','4','5','6','7','8','9', '0', '.']
export  const startOfSum =['1','2','3','4','5','6','7','8','9', '.']
export  const symbols = ['-', '+', '*', '/', '=']

function handleMinus(symbol, arr, display) {
  if (arr.length === 0) return arr

  const lastInArr = arr[arr.length - 1]
  let newChar = symbol
  if (newChar === '➖'){
    newChar = '-'
  }
  if (lastInArr === '-' || lastInArr === '+'){
    arr[arr.length - 1] = newChar 
    return arr
  }
  return [...arr, newChar]
}
