import {useState} from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  username: "",
  score1: "",
  score2: ""
};

function SignUp(onHandleUserSubmit) {
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState("")

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
        .then(newUser => onHandleUserSubmit(newUser))
        .catch(err => setError(err.message))
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
              <input id="username" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
              {formData.username === '' ? <p>You must log in first</p> : <button className='homepage-button' onClick={handleSubmit}><Link to={'../quiz/'}>Time to test your knowledge</Link></button>}
            </div>
          </form>
        </main>
      </div>
    );
  }
  
  export default SignUp;