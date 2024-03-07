import SignUp from "../Components/SignUp"
import NavBar from "../Components/NavBar"


const Home = () => {


  return (
    <>
      <header>
        <NavBar />    
      </header>
      <br></br>
      <div className="home-body">
        <div className='introduction'>
          <br></br>
          <br></br>
          <br></br>
          <h1 >The Case of the Imposter Pies</h1>
          <br></br>
          <p>Your goal is to decipher which pizzas are real pies and which are AI lies. There are two rounds of 10 pizzas each. Each correct answer scores one point. Good luck!</p>
        </div>
        <SignUp/>
      </div>

    </>
  )
}

export default Home