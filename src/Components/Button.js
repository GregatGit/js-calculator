import React from 'react'
import './styles.scss'

const Button = ({ value = '0', id, func, style = 'c-button' }) => {
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
    <button id={id} onClick={() => func(value)} className={style}>
      {show}
    </button>
  )
}

export default Button
