
import SignUp from "../Components/SignUp"
import {useState} from 'react'
import NavBar from "../Components/NavBar"

const Home = () => {

  const [username, setUsername] = useState('')

  const onHandleUserSubmit = (newUser) => {
    setUsername([...username,newUser ])
  }

  return (
    <>
      <header>
        <NavBar />    
      </header>
      <main>
        <SignUp onHandleUserSubmit={onHandleUserSubmit}/>
      </main>

    </>
  )
}

export default Home