import React, { useState, useEffect } from 'react'

export const UsersContext = React.createContext()

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/users`)
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    const handleAddUser = (createdUser) => {
        setCurrentUser(createdUser)
        setUsers(currentUserList => [createdUser, ...currentUserList]) 

    }

    const updateUser = (updatedUser) => {
        setCurrentUser(updatedUser)
    }

    const updateUserList = (updatedUser) => {
        setUsers(currentUserList => currentUserList.map((user) => user.id === updatedUser.id ? updatedUser : user))
    }

    //! Need to be fixed
    // const handleDeleteUser = useCallback((userToRemove) => {
    //     setUsers(currentUsers => currentUsers.filter(user => user.id !== userToRemove.id))
    //     return fetch(`http://localhost:3000/users/${userToRemove.id}`, { method: "DELETE" })
    //         .catch((err) => {
    //             alert(err)
    //             setUsers(current => [...current, userToRemove])
    //         })
    // }, [])

    return (
        <UsersContext.Provider value={{currentUser, users , handleAddUser, updateUser, updateUserList }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider