
import SearchBar from './SearchBar'
import UserList from './UserList';
import { useState, useContext } from 'react';
import { UsersContext } from '../context/UsersProvider';
import { Outlet } from "react-router-dom";

function UserContainer() {
  const [searchQuery, setSearchQuery] = useState('')
  const {users, handleDeleteUser} = useContext(UsersContext)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }


  return (
    <div>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery}/>
      <UserList users={users} searchQuery={searchQuery} handleDeleteUser={handleDeleteUser}/>
      <Outlet context={{handleSearch, searchQuery}}/>
    </div>
  );
}

export default UserContainer;
