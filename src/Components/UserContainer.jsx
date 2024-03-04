import SearchBar from './SearchBar'
import UserList from './UserList';
import { useState, useContext } from 'react';
import { UsersContext } from '../context/UsersProvider';

function UserContainer() {
  const [searchQuery, setSearchQuery] = useState('')
  const {users, handleDeleteUser} = useContext(UsersContext)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
    console.log('searching')
  }

  const filteredUser = users.filter((user) => user.username.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery}/>
      <UserList users={filteredUser} searchQuery={searchQuery} handleDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default UserContainer;
