import NavBar from "../Components/NavBar"
import {useEffect, useState} from 'react'
import PizzaCard from "../Components/PizzaCard"


const Quiz = () => {

  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState('')

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

  const mappedPizzas = pizzas.map((pizza) => (<PizzaCard {...pizza} key={pizza.id}/>))

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
        {mappedPizzas}
      </main>

    </>
  )
}

export default Quiz