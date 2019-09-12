import React from 'react'
import './styles.scss'

const Button = ({ value = 1, id, func }) => {
  return (
    <button id={id} onClick={() => func(value)} className="c-button">
      {value}
    </button>
  )
}

export default Button