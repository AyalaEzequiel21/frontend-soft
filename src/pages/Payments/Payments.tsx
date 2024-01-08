import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { paymentsHeaderItem } from "@/data/headersTable/paymentsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { PaymentMongo } from "@/schemas/paymentSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

interface paymentsProps {}

export const Payments: React.FC<paymentsProps> = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseAPI<PaymentMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/payments'
    })

    const [dataResults, setDataResults] = useState<PaymentMongo[]>([])

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
        (<ResultsSectionLayout title="Pagos" headItems={paymentsHeaderItem} dataResults={dataResults}/>)
    )
}