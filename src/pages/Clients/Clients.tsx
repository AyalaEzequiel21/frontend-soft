import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { clientHeaderItems } from "@/data/headersTable/clientsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseError } from "../Login/Login"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { ErrorComponent } from "@/components/common/ErrorComponent"

interface ResponseClients {
    ok: boolean,
    data: ClientMongo[]
}

export const Clients = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseClients, ResponseError>({
        method: EMethodsApi.GET,
        path: '/clients'
    })

    const [dataResults, setDataResults] = useState<ClientMongo[]>([])

    useEffect(() => {
        callApi(null)
    }, [])

    useEffect(() => {
        if(data !== null){
            setDataResults(data?.data.data)
        }
    }, [data])
    
    return (
        isLoading?
        (<CircularProgress color="inherit" size={30}/>)
        :
        error? (<ErrorComponent error={error}/>)
        :
        (<ResultsSectionLayout<ClientMongo> title="Clientes" headItems={clientHeaderItems} dataResults={dataResults}/>)
    )
    
}
 