import UserCard from './UserCard'


const UserList = ({currentUser, users, handleDeleteUser}) => {

// Sort users descending by total score
    const sortedUsers = users.sort((a, b) => {
      const totalScoreA = parseInt(a.score1) + parseInt(a.score2);
      const totalScoreB = parseInt(b.score1) + parseInt(b.score2);
      return totalScoreB - totalScoreA; 
    });
  
    const mappedUser = sortedUsers.map(user => (
      <UserCard
        key={user.id}
        user={user}
        {...user}
        currentUser={currentUser}
        handleUserDelete={handleDeleteUser}
      />
    ));

  return (
    <div className='users-wrapper'>
        {mappedUser}
    </div>
  )
}

export default UserList