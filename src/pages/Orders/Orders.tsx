import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { ordersHeaderItem } from "@/data/headersTable/ordersHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { OrderListMongo } from "@/schemas/orderListSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

interface ordersProps {}

export const Orders: React.FC<ordersProps> = () => {

    const {data, isLoading, error, callApi} = UseApiCallFunction<null, ResponseAPI<OrderListMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/ordersList'
    })

    const [dataResults, setDataResults] = useState<OrderListMongo[]>([])

    useEffect(() => {
        callApi(null)
    }, [])

    useEffect(() => {        
        if(data !== null)
        setDataResults(data.data.data)
    }, [data])

    return (
        isLoading ?
        (<CircularProgress color="inherit" size={30}/>)
        : 
        error ?
        (<ErrorComponent error={error}/>)
        : 
        (<ResultsSectionLayout title="Listas de venta" headItems={ordersHeaderItem} dataResults={dataResults}/>)
    )
}