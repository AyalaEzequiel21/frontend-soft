
export const paymentsHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'payment_date'
    },
    {
        label: 'Cliente',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'clientName'
    },
    {
        label: 'Monto',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'amount'
    },
    {
        label: 'Metodo',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'payment_method'
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]