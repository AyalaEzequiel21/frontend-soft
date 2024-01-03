import { createContext,  useState } from "react"

interface UserDataContext {
    username: string,
}

interface ContextData {
    contextUser: UserDataContext | null
    loginContext: (userData: UserDataContext) => void;
    logoutContext: () => void;
}

export const GlobalContext = createContext<ContextData|undefined>(undefined)

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

    return (
        <GlobalContext.Provider value={{contextUser, loginContext, logoutContext}}>
            {children}
        </GlobalContext.Provider>
    )
}

