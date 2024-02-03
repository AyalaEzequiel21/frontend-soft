import { UserDataContext } from "@/utilities/interfaces/UserDataContext";
import React, { createContext, useEffect, useState } from "react";

interface ContextData {
    user: UserDataContext | null
    login: (userData: UserDataContext) => void;
    logout: () => void;
}

interface useProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<ContextData>({
    user: null,
    login: () => {},
    logout: () => {}
})

export const UserProvider: React.FC<useProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserDataContext|null>(null)

    const login = (userData: UserDataContext) => {
        setUser(userData)
        localStorage.setItem('username', userData.username)
        localStorage.setItem('role', userData.role)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('username')
        localStorage.removeItem('role')
    }

    useEffect(()=> {
        const storedUser = localStorage.getItem('username')
        const storedRole = localStorage.getItem('role')

        if(storedUser && storedRole){
            setUser({
                username: storedUser,
                role: storedRole
            })
            // navigate('/')
            history.pushState(null, "/")
        }else {
            history.pushState(null, "/login")
        }
    }, [])

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}
