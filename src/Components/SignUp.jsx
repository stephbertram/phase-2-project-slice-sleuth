import { useState, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { UsersContext } from '../context/UsersProvider'
import { Link } from 'react-router-dom';
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
          .catch(err => setError(err.message))
      ).catch(yupError => setError(yupError.message))
    }   

    //! Tracks information added into input box
    const handleChange = (event) => { 
      setFormData({...formData, [event.target.name]: event.target.value})
      console.log(formData)
    }
    


    return (

      <div>
        {error ? <p>{error}</p> : null}
        <main className='main-container'>
          <h3 className='title-container'>Create an username to play:</h3>
          <form className='input-container' onSubmit ={handleSubmit}>
            <div>
              <input className='input-box' id="username" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
              <button className='button-container'><Link to={"/quiz"}>Submit</Link></button>
            </div>
          </form>
        </main>
      </div>
    );
  }
  
  export default SignUp;