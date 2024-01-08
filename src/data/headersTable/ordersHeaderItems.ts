
export const ordersHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'order_date' 
    },
    // {
    //     label: 'Ventas',
    //     colSpan: 1,
    //     starting: '',
    //     isPrincipal: true,
    //     key: ('sales' as keyof TableDataRowType)
    // },
    {
        label: 'Estado',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'order_status' 
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]