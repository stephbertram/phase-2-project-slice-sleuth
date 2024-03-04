import NavBar from "../Components/NavBar"
import {useEffect, useState, useContext} from 'react'
import PizzaCard from "../Components/PizzaCard"
import { Link , useNavigate } from "react-router-dom"
import { UsersContext } from "../context/UsersProvider"
import {toast} from "react-hot-toast"


const Quiz = () => {

  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState('')
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [round, setRound] = useState(1)
  const currentPizzas = pizzas.filter(p => p.round == round)
  const displayPizza = currentPizzas[currentIndex]
  const API = 'http://localhost:3000'


  //! Trying to hardcode user for patching

  const {currentUser} = useContext(UsersContext)
  const navigateToHome = useNavigate()

  console.log(currentUser)

  //! Impliment new round
  const newRound = () => {
    setRound(round => round + 1)
    setCurrentIndex(0)
    setScore(0)
  }

  //! Fetching of our Pizza database
  useEffect(() => {
    if(!currentUser){
      toast.error('You must create an username first')
      navigateToHome("/")
    }
    fetch(API + '/pizzas')
    .then((r)=> {
      if(!r.ok){
        throw new Error ('The json server is not running.')
      }
      return r.json()
    })
    .then(setPizzas)
    .catch((err) => setError(err.message))
  }, []);

  //! Point system with two buttons (Real Pizza, AI Lie)
  const handleNextPizza = (event) => {

    if(event.target.value === 'AIpie' && displayPizza.AI === true) {
      setScore((currentScore) => currentScore + 1 )
    }
    else if(event.target.value === 'realpie' && displayPizza.AI === false){
      setScore((currentScore) => currentScore + 1 )
    }

    if(currentIndex + 1 == currentPizzas.length) {
      console.log(currentIndex)
      console.log(score)
      // fetch to add score to user

    fetch (API + `/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({[`score${round}`]: score}),
    })
      .then(resp => resp.json())
      // .then((updatedUser) => onUpdateItem(updatedUser))
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
        <PizzaCard {...displayPizza} key={displayPizza.id} handleNextPizza={handleNextPizza} score={score} currentUser={currentUser}/> :
        score > 6 ? 
          <>
          <h1>Your score is {score}. Amazing!</h1> 
          <button><Link to={'/scores/'}>Check out your score</Link></button>
          </>
          : 
          <>
          <h1>Your {currentUser.username} score is {score}. You can do better!</h1>
          <button><Link to={'/scores/'}>Check out your score</Link></button>
          </>}
          {!displayPizza && pizzas && round < 2 ? 
            <button onClick={newRound}>Play next round?</button> : null
          }
      </main>
      </>
  )
}

export default Quiz