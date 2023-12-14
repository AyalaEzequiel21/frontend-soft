import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const salesHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'sale_date' as keyof TableDataRowType
    },
    {
        label: 'Cliente',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'clientName' as keyof TableDataRowType
    },
    {
        label: 'Total',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'totalSale' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]