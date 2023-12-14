// import { ClientType } from "@/utilities/types/ClientType";
import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const clientHeaderItems = [
    {
        label: 'Categoria',
        colSpan: 1,
        starting: 'medium',
        isPrincipal: false,
        key: 'category' as keyof TableDataRowType
    },
    {
        label: 'Cliente',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'nombre' as keyof TableDataRowType
    },
    {
        label: 'Balance $',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'balance' as keyof TableDataRowType
    },
    {
        label: 'Telefono',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'telefono' as keyof TableDataRowType
    },
    {
        label: 'Reparto',
        colSpan: 1,
        starting: 'large',
        isPrincipal: false,
        key: 'in_delivery' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]