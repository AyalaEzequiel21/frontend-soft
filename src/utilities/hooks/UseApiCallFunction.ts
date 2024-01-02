import axios, { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

interface apiCallProps {
    method: string,
    path: string,
}

export interface apiResponse<T> {
    data: AxiosResponse | null
    error: AxiosError | null
    isLoading: boolean,
    callApi: (body: T) => void
}

export const UseApiCallFunction = <T, >({method, path, }: apiCallProps): apiResponse<T> => {

    const [data, setData] = useState<AxiosResponse| null>(null)
    const [error, setError] = useState<AxiosError| null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
 
        const callApi = async (body: T) => {
            setIsLoading(true)
            try {
                const response = await axios({
                    method: method,
                    baseURL: "http://localhost:4000/praderaAPI",
                    url: path,
                    data: body 
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