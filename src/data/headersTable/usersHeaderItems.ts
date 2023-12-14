import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const userHeaderItem = [
    {
        label: 'Id',
        colSpan: 1,
        starting: 'medium',
        isPrincipal: false,
        key: '_id' as keyof TableDataRowType
    },
    {
        label: 'Usuario',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'username' as keyof TableDataRowType
    },
    {
        label: 'Role',
        colSpan: 1,
        starting: '',
        isPrincipal: false,
        key: 'role' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]