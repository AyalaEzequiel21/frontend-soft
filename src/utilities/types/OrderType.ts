export type DetailOrder = {
    saleId: string,
    clientName: string,
    totalSale: number
}

export type OrderType = {
    _id: string,
    order_date: string,
    sales: DetailOrder[],
    order_status: string
}