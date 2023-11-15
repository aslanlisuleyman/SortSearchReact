import React from 'react'

function Card({myproduct}) {
  return (
    <div className='card'>
        <img src={myproduct.image} alt="" />
        <h3 style={{marginTop:'10px'}}>Heading</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>{myproduct.price}</p>
    </div>
  )
}

export default Card