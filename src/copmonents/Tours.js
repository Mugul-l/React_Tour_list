import React from 'react'
import Card from './Card.js'
function Tours({tours, removeTour}) {
  return (
    <div>
      <div>
      <h2>My Tour List</h2>
      </div>
        <div>
            {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  )
}

export default Tours
