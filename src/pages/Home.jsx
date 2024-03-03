
import SignUp from "../Components/SignUp"
// import {useState} from 'react'
import NavBar from "../Components/NavBar"

const Home = () => {


  return (
    <>
      <header>
        <NavBar />    
      </header>
      <main>
        <SignUp/>
      </main>

    </>
  )
}

export default Home