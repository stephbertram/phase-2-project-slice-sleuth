import {useState} from 'react';
import { Link } from "react-router-dom";

const initialState = {
  username: "",
};


function SignUp(onHandleUserSubmit) {
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON", 
        },
        body: JSON.stringify(formData)
      })
        .then(resp => resp.json())
        .then(newUser => onHandleUserSubmit(newUser))
        setFormData(initialState)
        .catch(err => setError(err.message))
    }

    const handleChange = (event) => { 
      setFormData({...formData, [event.target.name]: event.target.value})
    }
    

    return (
      <>
        {error ? <p>{error}</p> : null}
        <main>
          <h1>Login</h1>
          <form onSubmit ={handleSubmit}>
            <div>
              <label>Username: </label>
              <input id="username" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
            </div>
            <br></br>
            <button onClick={handleSubmit}><Link to={'../quiz/'}>Time to test your knowledge</Link></button>
          </form>
        </main>
      </>
    );
  }
  
  export default SignUp;