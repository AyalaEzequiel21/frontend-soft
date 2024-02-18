import { CardsContainerGrid } from "@/components/cards/CardsContainerGrid"
import { InfoCarContent } from "@/components/cards/InfoContentCard"
import { CardLayout } from "@/components/common/CardLayout"
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


    useEffect(()=> {
        callApi(null)
    }, [])

    useEffect(()=> {
        if( data && data.data.data ){
            setDataResults(data.data.data)               
        }
    }, [data])

    const cliente = {
        Telefono: "11-2223-3455",
        Ingreso: "26/10/2020",
        Categoria: "cat_2",
        Reparto: "si",
      }

    return (
        <DetailsLayout  section="Cliente:">
            {/* <CardsContainerGrid /> */}
            <CardLayout>
                <InfoCarContent title="Horacio" data={cliente}/>
            </CardLayout>
        </DetailsLayout>
    )
}