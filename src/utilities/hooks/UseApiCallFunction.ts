import axios, { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

interface apiCallProps {
    method: string,
    path: string,
}

export interface apiResponse<T, V, E> {
    data: AxiosResponse<V> | null
    error: AxiosError<E> | null
    isLoading: boolean,
    callApi: (body: T|null) => void
}

export const UseApiCallFunction = <T, V, E>({method, path, }: apiCallProps): apiResponse<T, V, E> => {

    const [data, setData] = useState<AxiosResponse<V> | null>(null)
    const [error, setError] = useState<AxiosError<E> | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
 
        const callApi = async (body: T|null) => {
            setIsLoading(true)
            try {
                const response = await axios({
                    method: method,
                    baseURL: import.meta.env.VITE_API_URL_LOCAL,
                    url: path,
                    data: body,
                    withCredentials: true 
                })
                setData(response)
            } catch(err) {
                setError(err as AxiosError<E>)
            }finally {
                setIsLoading(false)
            }
        }
        
    return { data, error, isLoading, callApi}
}