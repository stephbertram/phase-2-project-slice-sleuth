import '../styles.css'

const PizzaCard = ({ name, image, AI, handleNextPizza }) => {
  return (
    <div className = 'pizza-container'>
      <img className='photo' src={image} alt={name}/>
      <div>
          <button className='quiz-page-button' onClick = {handleNextPizza}>Real Pie</button>
          <button className='quiz-page-button' onClick = {handleNextPizza}>AI Lie</button>
      </div>
    </div>
  )
}

export default PizzaCard