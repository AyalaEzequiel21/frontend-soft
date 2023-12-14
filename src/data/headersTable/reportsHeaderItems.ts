import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const reportsHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'report_date' as keyof TableDataRowType
    },
    {
        label: 'Estado',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'report_status' as keyof TableDataRowType
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