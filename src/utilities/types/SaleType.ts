export type DetailSale = {
    product: string, 
    quantity: number,
    partialResult: number
}

export type SaleType = {
    _id: string,
    sale_date: string,
    clientId: string,
    clientName: string,
    details: DetailSale[],
    totalSale: number,
    payment: string
}