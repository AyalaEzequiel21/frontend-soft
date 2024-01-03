import { GlobalContext } from "@/context/GlobalContext"
import { useContext } from "react"

export const UseGlobalContext = () => {
    return useContext(GlobalContext)
}