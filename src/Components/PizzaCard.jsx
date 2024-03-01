import '../styles.css'

const PizzaCard = ({ name, image, handleNextPizza, score }) => {
  return (
    <div className = 'pizza-container'>
      <h2>Your Score: {score}</h2>
      <img className='photo' src={image} alt={name}/>
      <div>
          <button className='quiz-page-button' onClick = {handleNextPizza} value={'realpie'}>Real Pie</button>
          <button className='quiz-page-button' onClick = {handleNextPizza} value={'AIpie'}>AI Lie</button>
      </div>
    </div>
  )
}

export default PizzaCard