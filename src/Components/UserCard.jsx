
const UserCard = ({ username, score1, score2}) => {

  return (
    <>
    <div className='user-card'>
        <h3>{username}</h3>
        <span>Score: {score1} <br></br> <br></br>Score: {score2}</span>
        <br></br>
        <br></br>
        <button>Delete?</button>
    </div>
    </>
  )
}

export default UserCard