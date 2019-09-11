import React from 'react'

const Display = ({ input = 0 }) => {
  return (
    <div>
      <input id="display" className="c-display" placeholder="0" readOnly type="text" value={input}/>
    </div>
  )
}

export default Display
