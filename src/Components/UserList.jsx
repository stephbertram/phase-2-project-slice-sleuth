import {useMemo} from 'react'
import UserCard from './UserCard'


const UserList = ({users, searchQuery, handleDeleteUser}) => {

    const renderUsers = useMemo(() => users
    .filter(user => {
        return( 'hello' ||  (user.username) && (user.username.toLowerCase().includes(searchQuery).toLowerCase()))
    })
    .map(user => (
        <UserCard key={user.id} user={user} {...user} handleUserDelete={handleDeleteUser}/>
    )), [users, searchQuery, handleDeleteUser]
    )

  return (
    <div>
        {renderUsers}
    </div>
  )
}

export default UserList