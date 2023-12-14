import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const ordersHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'order_date' as keyof TableDataRowType
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
        key: 'order_status' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]