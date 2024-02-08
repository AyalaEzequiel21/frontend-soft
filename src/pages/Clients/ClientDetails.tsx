import { Card } from "@/components/card/Card"
import { DetailsLayout } from "@/components/common/DetailsLayout"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseOneAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface clientDetailsProps {

}

export const ClientDetails: React.FC<clientDetailsProps> = () => {

    const id = useParams()

    const {data, callApi} = UseApiCallFunction<null, ResponseOneAPI<ClientMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: `/clients/client/${id.clientId}`
    })

    const [dataResults, setDataResults] = useState<ClientMongo|null>(null)

    useEffect(()=> {
        callApi(null)
    }, [])

    useEffect(()=> {
        if( data && data.data.data ){
            setDataResults(data.data.data)               
        }
    }, [data])



    return (
        <DetailsLayout keyWord={ dataResults ? dataResults?.fullname : 'client'} section="Cliente:">
            <Card subMessage="Total de compras" principalMessage="1.500.000"/>
            <Button>Click me</Button>
        </DetailsLayout>
    )
}