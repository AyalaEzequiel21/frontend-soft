import { CardsContainerGrid } from "@/components/cards/CardsContainerGrid"
import { DetailsLayout } from "@/components/common/DetailsLayout"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseOneAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
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

    // const getTotalSales = (sales) => {

    // }

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
            <CardsContainerGrid />
        </DetailsLayout>
    )
}