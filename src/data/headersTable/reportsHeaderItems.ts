
export const reportsHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'report_date' 
    },
    {
        label: 'Estado',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'report_status'
    },
    // {
    //     label: 'Total',
    //     colSpan: 1,
    //     starting: '',
    //     isPrincipal: false,
    //     key: 'totalSale' as keyof TableDataRowType
    // },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]