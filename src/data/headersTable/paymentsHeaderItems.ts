import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const paymentsHeaderItem = [
    {
        label: 'Fecha',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'payment_date' as keyof TableDataRowType
    },
    {
        label: 'Cliente',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'clientName' as keyof TableDataRowType
    },
    {
        label: 'Monto',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'amount' as keyof TableDataRowType
    },
    {
        label: 'Metodo',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'payment_method' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]