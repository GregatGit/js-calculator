import React from 'react'
import './styles.scss'

const Button = ({ value = 1, id, func }) => {
  let show = value
  if(value === '-'){
    show = '➖'
  }
  if(value === '*'){
    show = '✖'
  }
  if (value === '/'){
    show = '÷'
  }
  if (value === ''){
    show = '0'
  }
  return (
    <button id={id} onClick={() => func(value)} className="c-button">
      {show}
    </button>
  )
}

export default Button
