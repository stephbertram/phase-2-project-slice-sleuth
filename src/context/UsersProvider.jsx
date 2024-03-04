import React, { useState, useEffect } from 'react'

export const UsersContext = React.createContext()

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const currentUser = {
        id: 'Steph',
        username: 'Steph',
        score1: '',
        score2: ''
    }

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
        setUsers(currentUserList => [createdUser, ...currentUserList]) 
    }

    const handleUpdateScore = () => {

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
        <UsersContext.Provider value={{currentUser, users , handleAddUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider