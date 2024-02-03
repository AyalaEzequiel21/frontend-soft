import { UseLocalStorage } from "@/utilities/hooks/UseLocalStorage";
import { UserDataContext } from "@/utilities/interfaces/UserDataContext";
import { createContext, useState } from "react"
// import { useEffect } from "react"


interface ContextData {
    contextUser: UserDataContext | null
    loginContext: (userData: UserDataContext) => void;
    logoutContext: () => void;
}

export const GlobalContext = createContext<ContextData>({
    contextUser:  null,
    loginContext: () => {},
    logoutContext: () => {}
})

interface GlobalContextProviderProps {
    children: React.ReactNode
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({children}) => {

    const {sessionUser} = UseLocalStorage()
    const [contextUser, setContextUser] = useState<UserDataContext|null>(sessionUser)
    
    const loginContext = (userData: UserDataContext) => {
        setContextUser(userData)
    }   

    const logoutContext = () => {
        setContextUser(null)
    }

    return (
        <GlobalContext.Provider value={{contextUser, loginContext, logoutContext}}>
            {children}
        </GlobalContext.Provider>
    )
}

