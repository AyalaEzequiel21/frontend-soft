import { AuthContext } from "@/context/AuthProvider"
import { useContext } from "react"

export const UseAuth = () => {
    const context = useContext(AuthContext)
    return context
}