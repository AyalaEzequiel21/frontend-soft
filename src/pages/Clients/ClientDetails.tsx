import { DetailsLayout } from "@/components/common/DetailsLayout"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface clientDetailsProps {

}

export const ClientDetails: React.FC<clientDetailsProps> = () => {

    const id = useParams()

    const {data, callApi} = UseApiCallFunction<null, ResponseAPI<ClientMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: `/clients/client/${id.clientId}`
    })

    const [dataResults, setDataResults] = useState<ClientMongo[]>([])

    useEffect(()=> {
        callApi(null)
    }, [])

    useEffect(()=> {
        if( data !== null){
            setDataResults(data.data.data)                        
        }
    }, [data])

    useEffect(() => {
        console.log();
    }, [dataResults])

    return (
        <DetailsLayout keyWord={'client'} section="Clients">
            <Button>Click me</Button>
        </DetailsLayout>
    )
}