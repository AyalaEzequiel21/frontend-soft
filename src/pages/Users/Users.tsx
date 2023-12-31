import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { userHeaderItem } from "@/data/headersTable/usersHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { UserMongo } from "@/schemas/authSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

interface usersProps {}

export const Users: React.FC<usersProps> = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseAPI<UserMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/auth/users'
    })

    const [dataResults, setDataResults] = useState<UserMongo[]>([])

    useEffect(() => {
        callApi(null)
    }, [])

    useEffect(() => {
        if(data !== null){
            setDataResults(data.data.data)
        }
    }, [data])
    
    return (
        isLoading ?
        (<CircularProgress color="inherit" size={30}/>)
        :
        error ? (<ErrorComponent error={error}/>)
        :
        (<ResultsSectionLayout<UserMongo> title="Usuarios" headItems={userHeaderItem} dataResults={dataResults}/>)
    )
}