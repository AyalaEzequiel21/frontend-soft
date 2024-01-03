import axios, { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

interface apiCallProps {
    method: string,
    path: string,
}

export interface apiResponse<T, V> {
    data: AxiosResponse<V> | null
    error: AxiosError | null
    isLoading: boolean,
    callApi: (body: T|null) => void
}

export const UseApiCallFunction = <T, V>({method, path, }: apiCallProps): apiResponse<T, V> => {

    const [data, setData] = useState<AxiosResponse<V>| null>(null)
    const [error, setError] = useState<AxiosError| null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
 
        const callApi = async (body: T|null) => {
            setIsLoading(true)
            try {
                const response = await axios({
                    method: method,
                    baseURL: "http://localhost:4000/praderaAPI",
                    url: path,
                    data: body,
                    withCredentials: true 
                })
                setData(response)
            } catch(err) {
                setError(err as AxiosError)
            }finally {
                setIsLoading(false)
            }
        }
        
    return { data, error, isLoading, callApi}
}