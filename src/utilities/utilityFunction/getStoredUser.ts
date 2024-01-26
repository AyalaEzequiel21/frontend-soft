import { UserDataContext } from "../interfaces/UserDataContext"

export const getStoredUser = () => {
    const storedUsername = localStorage.getItem('username')
    const storedRole = localStorage.getItem('role')
    let userData: UserDataContext|null = null

    if (storedUsername && storedRole){
        userData = {
            username: storedUsername,
            role: storedRole
        }
    }
    return userData
}