import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { productHeaderItem } from "@/data/headersTable/productsHeaderItems"
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ProductMongo } from "@/schemas/productSchema"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { ResponseAPI } from "@/utilities/interfaces/ResponseAPI"
import { ResponseError } from "@/utilities/types/ResponseErrorApi"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { ErrorComponent } from "@/components/common/ErrorComponent"

interface productsProps {}

export const Products: React.FC<productsProps> = () => {

    const {data, error, isLoading, callApi} = UseApiCallFunction<null, ResponseAPI<ProductMongo>, ResponseError>({
        method: EMethodsApi.GET,
        path: '/products'
    })

    const [dataResults, setDataResults] = useState<ProductMongo[]>([])

    useEffect(()=> {
        callApi(null)
    }, [])

    useEffect(()=> {
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
        (<ResultsSectionLayout title="Productos" headItems={productHeaderItem} dataResults={dataResults}/>)
    )
}