import React from 'react'

const Display = ({ display = 0 }) => {
  return (
    <div>
      <input id="display" className="c-display" placeholder="0" readOnly type="text" value={display}/>
    </div>
  )
}

export default Display
