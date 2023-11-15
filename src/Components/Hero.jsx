import React from 'react'
import Button from './Button'
function Hero({cards,setProducts}) {
  return (
    <div className='hero'>
      
        <Button  cards={cards} setProducts={setProducts}/>
        
    </div>
  )
}

export default Hero