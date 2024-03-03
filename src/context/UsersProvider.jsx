import React, { useState, useEffect, useCallback } from 'react'

export const UsersContext = React.createContext()

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

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

    // const handlePatchProject = (updatedProject) => {
    //     setProjects(currentProjects => currentProjects.map(project => (
    //         project.id === updatedProject.id ? updatedProject : project
    //     )))
    // }

    const handleDeleteUser = useCallback((userToRemove) => {
        setUsers(currentUsers => currentUsers.filter(user => user.id !== userToRemove.id))
        return fetch(`http://localhost:3000/users/${userToRemove.id}`, { method: "DELETE" })
            .catch((err) => {
                alert(err)
                setUsers(current => [...current, userToRemove])
            })
        // .then(() => navigate("/projects"))
    }, [])

    return (
        <UsersContext.Provider value={{ users , handleAddUser, handleDeleteUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider