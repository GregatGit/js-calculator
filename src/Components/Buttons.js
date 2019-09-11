import React from 'react'
import Button from './Button'

const Buttons = ({func}) => {
  return (
    <div>
        <div>
          <Button value="7" id={7} func={func} />
          <Button value="8" id={8} func={func} />
          <Button value="9" id={9} func={func} />
          <Button value="÷" id={'/'} func={func} />
        </div>
        <div>
          <Button value="4" id={4} func={func} />
          <Button value="5" id={5} func={func} />
          <Button value="6" id={6} func={func} />
          <Button value="X" id={'*'} func={func} />
        </div>
        <div>
          <Button value="1" id={1} func={func} />
          <Button value="2" id={2} func={func} />
          <Button value="3" id={3} func={func} />
          <Button value="-" id={'-'} func={func} />
        </div>
        <div>
          <Button value="0" id={0} func={func} />
          <Button value="." id={'.'} func={func} />
          <Button value="=" id={'='} func={func} />
          <Button value="+" id={'+'} func={func} />
        </div>
        <div>
          <Button value="M" id={'M'} func={func} />
          <Button value="M+" id={'M+'} func={func} />
          <Button value="MR" id={'MR'} func={func} />
          <Button value="MC" id={'MC'} func={func} />
        </div>
      </div>
  )
}

export default Buttons
