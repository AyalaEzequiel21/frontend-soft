import { UserDataContext } from "@/utilities/interfaces/UserDataContext";
import { createContext, useEffect, useState } from "react";

interface AuthContextData {
    userLoged: UserDataContext|null
    login: (userData: UserDataContext) => void
    logout: () => void
}

interface providerProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({
    userLoged: null,
    login: ()=> {},
    logout: ()=> {}
})

export const AuthProvider: React.FC<providerProps> = ({children}) => {
    const [userLoged, setUserLoged] = useState<UserDataContext|null>(null)

    const login = (userData: UserDataContext) => {
        localStorage.setItem('username', userData.username)
        localStorage.setItem('role', userData.role)
        setUserLoged(userData)
    }

    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        setUserLoged(null)
    }

    useEffect(()=> {
        if(!userLoged){
            const userStored = localStorage.getItem('username')
            const roleStored = localStorage.getItem('role')
            if(userStored && roleStored){
                login({
                    username: userStored,
                    role: roleStored
                })
            } 
        }
    }, [userLoged])

    return(
        <AuthContext.Provider value={{userLoged, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}