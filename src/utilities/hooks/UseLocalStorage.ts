import { useState } from "react"
import { UserDataContext } from "../interfaces/UserDataContext"

export const UseLocalStorage = () => {

    const [sessionUser, setSessionUser] = useState<UserDataContext|null>(null)

    const loginLocalUser = (user: UserDataContext) => {
        localStorage.setItem('username', user.username)
        localStorage.setItem('role', user.role)
        setSessionUser(user)
    }

    const logoutLocalStore = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        setSessionUser(null)
    }

    return {sessionUser, loginLocalUser, logoutLocalStore}
}