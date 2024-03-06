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
          <h3>You are a guest detective at a pizza parlor. </h3>
          <h3>You must discover which pizza is AI LIE. </h3>
        </div>
        <SignUp/>
      </div>

    </>
  )
}

export default Home