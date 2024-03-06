
import SignUp from "../Components/SignUp"
import NavBar from "../Components/NavBar"


const Home = () => {


  return (
    <>
      <header>
        <NavBar />    
      </header>
      <br></br>
      <main className="home-body">
        <SignUp/>
        <div className='introduction'>
        <h3>You are a guest detective at a pizza parlor.</h3>
        <h3>You must discover which pizza is AI LIE. </h3>
        </div>
      </main>

    </>
  )
}

export default Home