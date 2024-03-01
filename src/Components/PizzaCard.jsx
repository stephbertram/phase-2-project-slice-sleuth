import React from 'react'

const PizzaCard = ({ name, image, AI }) => {
  return (
    <div>
      <img src={image} alt={name}/>
      <div>
          <button>Real Pie</button>
          <button>AI Lie</button>
      </div>
    </div>
  )
}

export default PizzaCard