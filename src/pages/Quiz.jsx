import NavBar from "../Components/NavBar"
import {useEffect, useState} from 'react'
import PizzaCard from "../Components/PizzaCard"
import {Link} from "react-router-dom"


const Quiz = () => {

  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState('')
  const [score, setScore] = useState(0)
  const pizza = pizzas[0] 

  useEffect(() => {
    fetch('http://localhost:3000/pizzas')
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
    setPizzas((currentPizza) => [
      ...currentPizza.slice(1)
    ])

    if(event.target.value === 'AIpie' && pizza.AI === true) {
      setScore((currentScore) => currentScore + 1 )
    }
    else if(event.target.value === 'realpie' && pizza.AI === false){
      setScore((currentScore) => currentScore + 1 )
    }
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
          <h3>Hello (UserName)</h3>
        </div>
        {pizza ?
        <PizzaCard {...pizza} key={pizza.id} handleNextPizza={handleNextPizza} score={score}/> :
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
      </main>
      </>
  )
}

export default Quiz