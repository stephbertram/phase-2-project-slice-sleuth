import React from 'react'

const PizzaCard = ({name, image, AI}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
    </div>
  )
}

export default PizzaCard