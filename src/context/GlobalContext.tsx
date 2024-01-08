import { createContext, useState } from "react"
import { useEffect } from "react"

interface UserDataContext {
    username: string,
    role: string
}

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
    const [contextUser, setContextUser] = useState<UserDataContext|null>(null)
    
    const loginContext = (userData: UserDataContext) => {
        setContextUser(userData)
    }   

    const logoutContext = () => {
        setContextUser(null)
    }

    useEffect(()=> {
        console.log(contextUser);
        
    }, [contextUser])

    return (
        <GlobalContext.Provider value={{contextUser, loginContext, logoutContext}}>
            {children}
        </GlobalContext.Provider>
    )
}

