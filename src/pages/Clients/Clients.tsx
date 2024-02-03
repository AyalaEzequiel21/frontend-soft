import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { clientHeaderItems } from "@/data/headersTable/clientsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { PermittedRolesAction } from "@/utilities/types/PermittedRolesAction"
import { ERole } from "@/enums/ERole"

interface clientesProps {}

export const Clients: React.FC<clientesProps> = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseAPI<ClientMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/clients'
    })

    const [dataResults, setDataResults] = useState<ClientMongo[]>([])
    
    const roles: PermittedRolesAction = {
       toolbarRoles: [ERole.Admin, ERole.Biller],
       rowRoles: [ERole.Admin, ERole.Biller] 
    }

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
        (<ResultsSectionLayout<ClientMongo> title="Clientes" headItems={clientHeaderItems} dataResults={dataResults} permittedRoles={roles} />)
    )
    
}
 