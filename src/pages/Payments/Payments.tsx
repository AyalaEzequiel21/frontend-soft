import { ErrorComponent } from "@/components/common/ErrorComponent"
import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { paymentsHeaderItem } from "@/data/headersTable/paymentsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ERole } from "@/enums/ERole"
import { PaymentMongo } from "@/schemas/paymentSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { PermittedRolesAction } from "@/utilities/types/PermittedRolesAction"
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
    const roles: PermittedRolesAction = {
        toolbarRoles: [ERole.Admin, ERole.Biller],
        rowRoles: [ERole.Admin, ERole.Biller] 
     }

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
        (<ResultsSectionLayout title="Pagos" headItems={paymentsHeaderItem} dataResults={dataResults} permittedRoles={roles}/>)
    )
}