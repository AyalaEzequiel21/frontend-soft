export type PaymentType = {
    _id: string,
    payment_date: string,
    clientName: string,
    amount: number,
    payment_method: string,
    sale_id: string|undefined,
    report_id: string|undefined
}