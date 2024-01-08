import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { reportsHeaderItem } from "@/data/headersTable/reportsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ReportMongo } from "@/schemas/reportSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

interface reportsProps {}

export const Reports: React.FC<reportsProps> = () => {

    const {data, isLoading, error, callApi} = UseApiCallFunction<null, ResponseAPI<ReportMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/reports'
    })

    const [dataResults, setDataResults] = useState<ReportMongo[]>([])

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
        (<ResultsSectionLayout title="Reportes de pago" headItems={reportsHeaderItem} dataResults={dataResults}/>)
    )
}