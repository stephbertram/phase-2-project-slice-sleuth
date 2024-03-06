import '../styles.css'

const PizzaCard = ({ currentUser, name, image, handleNextPizza, score, disabled, realButtonClass, aiButtonClass }) => {
  return (
    <div className = 'pizza-container'>
      <h2>{currentUser.username}'s score: {score}</h2>
      <img className='photo' src={image} alt={name}/>
      <div>
          <button disabled={disabled} className={realButtonClass} onClick = {handleNextPizza} value={'realpie'}>Real Pie</button>
          <button disabled={disabled} className={aiButtonClass} onClick = {handleNextPizza} value={'AIpie'}>AI Lie</button>
      </div>
    </div>
  )
}

export default PizzaCard