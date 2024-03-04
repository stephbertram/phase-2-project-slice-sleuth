// import {useMemo} from 'react'
import UserCard from './UserCard'


const UserList = ({currentUser, users, handleDeleteUser}) => {

    const mappedUser = users.map(user => (
        <UserCard key={user.id} user={user} {...user} currentUser={currentUser} handleUserDelete={handleDeleteUser}/>
    ))

  return (
    <div>
        {mappedUser}
    </div>
  )
}

export default UserList