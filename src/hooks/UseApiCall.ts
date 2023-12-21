import { EMethodsApi } from "@/enums/EMethodsApi";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";


interface useApiProps<T> {
    method: EMethodsApi
    path: string
    data: T | null
}

interface ApiResponse<T> {
    data: T | null
    error: AxiosError | null
    loading: boolean
}

const useApi = <T>({method, path, data}: useApiProps<T>): ApiResponse<T> => {
    const [response, setResponse] = useState<ApiResponse<T>>({
        data: null,
        error: null,
        loading: true
    })

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const result: AxiosResponse<T> = await axios({
                    method: method,
                    baseURL: "https://rickandmortyapi.com",
                    url: path,
                    // url: `${import.meta.env.BASE_URL}${path}`,
                    data: data
                })
                setResponse({
                    data: result.data,
                    error: null,
                    loading: false
                }) 
            } catch(err) {
                setResponse({
                    data: null,
                    error: err as AxiosError<T>,
                    loading: false
                })
            }
        }
        fetchData()
    }, [method, path, data])

    return response
}

export default useApi