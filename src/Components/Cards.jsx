import React from 'react'
import Card from './Card'

function Cards({myProducts}) {
  return (
    <div className='cards'>

      {
          myProducts && myProducts.map((my)=>(
              <Card myproduct={my}/>
          ))
      }
    </div>
  )
}

export default Cards