import {useState, useContext} from 'react';
// import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {UsersContext} from '../context/UsersProvider'
import { Link } from 'react-router-dom';

const initialState = {
  id: uuidv4(),
  username: "",
  score1: "",
  score2: ""
};

function SignUp() {
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState("")
  const {handleAddUser} = useContext(UsersContext)
  const [showButton, setShowButton] = useState(true)
  
  const toggleRemoveButton = () => {
    setShowButton(!showButton)
  }


    const handleSubmit = (e) => {
      e.preventDefault()

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData)
      })
        .then(resp => resp.json())
        .then(newUser => handleAddUser(newUser))
        // .then(setFormData(initialState)) //! Can't have this
        .catch(err => setError(err.message))
    }

    const handleBothClicks = (event) => {
      toggleRemoveButton()
      handleSubmit(event)
    }

    const handleChange = (event) => { 
      setFormData({...formData, [event.target.name]: event.target.value})
    }
    

    return (
      <div>
        {error ? <p>{error}</p> : null}
        <main>
          <h3>Create a username to play:</h3>
          <form onSubmit ={handleSubmit}>
            <div>
              {showButton && <input id="username" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>}
            </div>
            <div>
              {/* {formData.username === '' ? <p>You must create an account first to play</p> : <button className='homepage-button' onClick={handleSubmit}><Link to={'../quiz/'}>Time to test your knowledge</Link></button>} */}
              {showButton && <button className='user-submit-button' onClick={handleBothClicks}>Submit</button>}
              {!showButton ? 
                <>
                  <h3>Hello {formData.username} </h3> 
                  <button className='homepage-button' onClick={handleSubmit}><Link to={'../quiz/'}>Time to test your knowledge</Link></button>
                </>
                : null}
            </div>
          </form>
        </main>
      </div>
    );
  }
  
  export default SignUp;