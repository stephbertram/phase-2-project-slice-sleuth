import { useState, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { UsersContext } from '../context/UsersProvider'
import { useNavigate } from 'react-router-dom';
import {object, string} from 'yup'


function SignUp() {
  const initialState = {
    id: uuidv4(),
    username: "",
    score1: "",
    score2: ""
  };

  
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState("")
  const {handleAddUser} = useContext(UsersContext)
  const navigate = useNavigate()

    const usernameSchema = object().shape({
      username: string().required('Username is required!')
    })

    //! Handles submission of new user
    const handleSubmit = (e) => {
      e.preventDefault()
      usernameSchema.validate(formData).then(validFormData => 
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(validFormData)
        })
          .then(resp => resp.json())
          .then(newUser => handleAddUser(newUser))
          .then(() => navigate("/quiz"))
          .catch(err => setError(err.message))
      ).catch(yupError => setError(yupError.message))
    }   

    //! Tracks information added into input box
    const handleChange = (event) => { 
      setFormData({...formData, [event.target.name]: event.target.value})
      console.log(formData)
    }
    


    return (

      <>
        {error ? <p>{error}</p> : null}
        <div className='signup-container'>
          <div className='h3-container'>
            <h3>Create a username to play:</h3>
          </div>
          <div className="form-container">
            <form className='form' onSubmit ={handleSubmit}>
              <div className="input-container">
                <input className='input' id="username" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
              </div>
              <div className="button-container">
                <button className='submit-button'>Submit</button>
              </div>
            </form>
          </div>  
        </div>
      </>
    );
  }
  
  export default SignUp;