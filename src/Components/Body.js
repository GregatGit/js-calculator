import React from 'react'
import Button from './Button'
import './styles.scss'

const Body = () => {
  const temp = (str) => {
    console.log(str)
  }
  return (
    <div className="c-body">
    <h1>JS Calulator</h1>
    <div>
     <div>
      <Button 
        value="7" 
        id={7} 
        func={temp}  
      />
      <Button 
        value="8" 
        id={8} 
        func={temp}  
      />
      <Button 
        value="9" 
        id={9} 
        func={temp}  
      />
      <Button 
        value="/" 
        id={"/"} 
        func={temp}  
      />
     </div>
     <div>
      <Button 
        value="4" 
        id={4} 
        func={temp}  
      />
      <Button 
        value="5" 
        id={5} 
        func={temp}  
      />
      <Button 
        value="6" 
        id={6} 
        func={temp}  
      />
      <Button 
        value="X" 
        id={"*"} 
        func={temp} 
      />
     </div>
     <div>
      <Button 
        value="1" 
        id={1} 
        func={temp}  
      />
      <Button 
        value="2" 
        id={2} 
        func={temp}  
      />
      <Button 
        value="3" 
        id={3}
        func={temp}
      />
      <Button value="-" id={"-"} func={temp}  />
     </div>
     <div>
      <Button 
        value="0" 
        id={0} 
        func={temp}  
      />
      <Button 
        value="." 
        id={"."} 
        func={temp}  
      />
      <Button 
        value="=" 
        id={"="} 
        func={temp}  
      />
      <Button 
        value="+" 
        id={"+"} 
        func={temp}  
      />
     </div>
     <div>
      <Button 
        value="M" 
        id={1} 
        func={temp}  
      />
      <Button 
        value="M+" 
        id={"M+"} 
        func={temp}  
      />
      <Button 
        value="MR" 
        id={1} 
        func={temp}  
      />
      <Button 
        value="MC" 
        id={1} 
        func={temp}  
      />
     </div>
    </div>
    </div>
  )
}

export default Body
