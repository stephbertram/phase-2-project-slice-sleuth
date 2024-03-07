import NavBar from "../Components/NavBar"
import {useEffect, useState, useContext} from 'react'
import PizzaCard from "../Components/PizzaCard"
import { Link , useNavigate } from "react-router-dom"
import { UsersContext } from "../context/UsersProvider"
import {toast} from "react-hot-toast"

const API = 'http://localhost:3000'

const Quiz = () => {

  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState('')
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [round, setRound] = useState(1)
  const [disabled, setDisabled] = useState(false)
  const [realButtonClass, setRealButtonClass] = useState('quiz-button-default')
  const [aiButtonClass, setAiButtonClass] = useState('quiz-button-default')
  const currentPizzas = pizzas.filter(p => p.round == round)
  const displayPizza = currentPizzas[currentIndex]
  const {currentUser, updateUser, updateUserList} = useContext(UsersContext)
  const navigateToHome = useNavigate()


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
  let correctAnswer = null

    // Correct: Selected "AI Lie" button
    if(event.target.value === 'AIpie' && displayPizza.AI === true) {
      setScore((currentScore) => currentScore + 1 )
      setAiButtonClass('correct')
      correctAnswer = true
      setTimeout(() => {setAiButtonClass('quiz-button-default')}, 1000)
    }
    // Correct: Selected "Real Pie" button
    else if(event.target.value === 'realpie' && displayPizza.AI === false) {
      setScore((currentScore) => currentScore + 1 )
      setRealButtonClass('correct')
      correctAnswer = true
      setTimeout(() => {setRealButtonClass('quiz-button-default')}, 1000)
    }
    // Incorrect: Selected "Real Pie" button but is AI
    else if(event.target.value === 'realpie' && displayPizza.AI === true) {
      setRealButtonClass('incorrect')
      correctAnswer = false
      setTimeout(() => {setRealButtonClass('quiz-button-default')}, 1000)
    }
    // Incorrect : Selected "AI Lie" button but is Real
    else if (event.target.value === 'AIpie' && displayPizza.AI === false) {
      setAiButtonClass('incorrect')
      correctAnswer = false
      setTimeout(() => {setAiButtonClass('quiz-button-default')}, 1000)
    }
    setDisabled(true)

    //! on last page
    if(currentIndex + 1 == currentPizzas.length) {

    const finalScore = correctAnswer ? score + 1 : score

    fetch (API + `/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({[`score${round}`]: finalScore}),
    })
      .then(resp => resp.json())
      .then(updatedUser => {
        console.log(currentUser)
        updateUser(updatedUser)
        updateUserList(updatedUser)
      })
    }
    

    setTimeout(() => {
      setCurrentIndex(currentIndex => currentIndex + 1)
      setDisabled(false)
    }, 500)
  }
  
  return (

    <>
      {error ? <p>{error}</p> : null}
      <header>
        <NavBar />
      </header>
      <br></br>
      <main className ='quiz-body'>
        <div>
          <br></br>
          <br></br>
        </div>
        {displayPizza ?
        <PizzaCard 
          disabled={disabled} 
          {...displayPizza} 
          key={displayPizza.id} 
          handleNextPizza={handleNextPizza} 
          score={score} 
          currentUser={currentUser} 
          aiButtonClass={aiButtonClass}
          realButtonClass={realButtonClass} /> 
          :
        score > 6 ? 
          <>
          <h1>Your score is {score}. Amazing!  <img src='../images/dancing.gif'/></h1> 
          <button className='leaderboard-button'><Link to={'/scores/'}>Check out all scores.</Link></button>
          </>
          : 
          <>
          <h1>Your score is {score}. You can do better! <iframe src="https://giphy.com/embed/S5wRNlSxMxGK2iKFnI" width="150" height="150" ></iframe><p><a href="https://giphy.com/gifs/PureMagicPictures-funny-food-sad-S5wRNlSxMxGK2iKFnI"></a></p></h1>
          <button className='leaderboard-button'><Link to={'/scores/'}>Check out all scores.</Link></button>
          </>}
          {!displayPizza && pizzas && round < 2 ? 
            <button className='leaderboard-button' onClick={newRound}>Play next round?</button> : null
          }
      </main>
    </>
  )
}

export default Quiz