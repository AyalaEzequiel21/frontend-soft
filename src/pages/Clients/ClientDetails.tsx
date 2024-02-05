import { DetailsLayout } from "@/components/common/DetailsLayout"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
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

    const [dataResults, setDataResults] = useState<ClientMongo>()

    useEffect(()=> {
        callApi(null)
        
    }, [])

    useEffect(()=> {
        if(data){
            setDataResults(data.data.data)
            // console.log(data);
            
        }
    }, [data])

    return (
        <DetailsLayout title="Client">
            <></>
        </DetailsLayout>
    )
}