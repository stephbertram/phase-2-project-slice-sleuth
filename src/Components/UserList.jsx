// import {useMemo} from 'react'
import UserCard from './UserCard'


const UserList = ({users, handleDeleteUser}) => {

    const mappedUser = users.map(user => (
        <UserCard key={user.id} user={user} {...user} handleUserDelete={handleDeleteUser}/>
    ))

  return (
    <div>
        {mappedUser}
    </div>
  )
}

export default UserList