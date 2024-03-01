
import SignUp from "../Components/SignUp"
import {useState} from 'react'

const Home = () => {

  const [username, setUsername] = useState('')

  const onHandleUserSubmit = (newUser) => {
    setUsername([...username,newUser ])
  }

  return (
    <>
    <header></header>

    <main>
      <h1>Home Page</h1>
      <SignUp onHandleUserSubmit={onHandleUserSubmit}/>
    </main>

    </>
  )
}

export default Home