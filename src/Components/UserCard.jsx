
const UserCard = ({ username, score1, score2, handleDeleteUser}) => {

  return (
    <>
    <div>
        <h3>{username}</h3>
        <span>Score: {score1} <br></br> <br></br>Score: {score2}</span>
        <br></br>
        <br></br>
        <button onClick={() => handleDeleteUser()}>Delete?</button>
    </div>
    </>
  )
}

export default UserCard