import React from 'react'

function Button({cards,setProducts}) {
  const handleChange=(e)=>{
    let search=e.target.value.trim().toLowerCase()
 let searchProducts= cards.filter((card)=>card.title.trim().toLowerCase().includes(search))
setProducts(searchProducts)
  }
  const handleClick=(e)=>{
    e.preventDefault()
    let sortedProducts=cards.sort((a,b)=>a.price-b.price)
    setProducts([...sortedProducts])
  }
  return (
    <div className='button'>
        <input type="text" placeholder='search product...' onChange={(e)=>handleChange(e)}/>
        <button  onClick={(e)=>handleClick(e)}>Sort By Price</button>    
    </div>
  )
}

export default Button