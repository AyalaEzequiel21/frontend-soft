export interface ResponseAPI<T> {
    ok: boolean,
    data: T[] 
}

export interface ResponseOneAPI<T> {
    ok: boolean,
    data: T
}