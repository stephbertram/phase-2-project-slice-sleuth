
const UserCard = ({ username, score1, score2}) => {

  const intScore1 = parseInt(score1)
  const intScore2 = parseInt(score2)

  const totalScore = intScore1 + intScore2

  return (
    <>
    <div className='user-card'>
        <h3>{username}</h3>
        <span>Total Score: {totalScore}<br></br> <br></br>Round 1: {score1} <br></br> <br></br>Round 2: {score2}</span>
    </div>
    </>
  )
}

export default UserCard