import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { salesHeaderItem } from "@/data/headersTable/salesHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { SaleMongo } from "@/schemas/saleSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { ErrorComponent } from "@/components/common/ErrorComponent"


interface salesProps {}

export const Sales: React.FC<salesProps> = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseAPI<SaleMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/sales'
    })

    const [dataResults, setDataResults] = useState<SaleMongo[]>([])

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
        error ?
        (<ErrorComponent error={error}/>)
        : 
        (<ResultsSectionLayout title="Ventas" headItems={salesHeaderItem} dataResults={dataResults}/>)
    )
}