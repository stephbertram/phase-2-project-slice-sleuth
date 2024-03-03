import NavBar from "../Components/NavBar"
import {useEffect, useState} from 'react'
import PizzaCard from "../Components/PizzaCard"
import {Link} from "react-router-dom"


const Quiz = () => {

  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState('')
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [round, setRound] = useState(1)
  const currentPizzas = pizzas.filter(p => p.round == round)
  const displayPizza = currentPizzas[currentIndex]
  const URL = 'http://localhost:3000/pizzas'

  const newRound = () => {
    setRound(round => round + 1)
    setCurrentIndex(0)
    setScore(0)
  }

  useEffect(() => {
    fetch(URL)
    .then((r)=> {
      if(!r.ok){
        throw new Error ('The json server is not running.')
      }
      return r.json()
    })
    .then(setPizzas)
    .catch((err) => setError(err.message))
  }, []);

  const handleNextPizza = (event) => {

    if(event.target.value === 'AIpie' && displayPizza.AI === true) {
      setScore((currentScore) => currentScore + 1 )
    }
    else if(event.target.value === 'realpie' && displayPizza.AI === false){
      setScore((currentScore) => currentScore + 1 )
    }

    if(currentIndex + 1 == currentPizzas.length) {
      // fetch to add score to user
      // const body = {[`score${round}`]: score}
    }
    setCurrentIndex(currentIndex => currentIndex + 1);
  
  }
 

  return (

    <>
      {error ? <p>{error}</p> : null}
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <h2>Play Slice Sleuth</h2>
        </div>
        {/* create display pizza container? */}
        {displayPizza ?
        <PizzaCard {...displayPizza} key={displayPizza.id} handleNextPizza={handleNextPizza} score={score}/> :
        score > 6 ? 
          <>
          <h1>Your score is {score}. Amazing!</h1> 
          <button><Link to={'../userPage/'}>Check out your score</Link></button>
          </>
          : 
          <>
          <h1>Your score is {score}. You can do better!</h1>
          <button><Link to={'../userPage/'}>Check out your score</Link></button>
          </>}
          {!displayPizza && pizzas && round < 2 ? 
            <button onClick={newRound}>Play next round?</button> : null
          }
      </main>
      </>
  )
}

export default Quiz