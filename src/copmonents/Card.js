import React, { useState } from 'react'

function Card({name,image,id,price,desc,removeTour}) {
    const[readmore,setReadmore]=useState(false)
    const description=`${desc.substring(0,120)}...`

    function readmoreHandler(){
        setReadmore(!readmore)
    }

  return (
    <div className='card'>
        <img src={image} alt="photo" />
        <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='description'>
            {description}
            <span className='read-more' onClick={readmoreHandler}>
                {readmore? "show less":"read more"}
            </span>
        </div>
        </div>
        
            <button className='btn-notInterested' 
            onClick={()=>removeTour(id)}>
                Not interested
            </button>      
    </div>
  )
}

export default Card
