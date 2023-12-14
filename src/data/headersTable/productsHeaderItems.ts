import { TableDataRowType } from "@/utilities/types/TableDataRowType";

export const productHeaderItem = [
    {
        label: 'Id',
        colSpan: 1,
        starting: 'medium',
        isPrincipal: false,
        key: '_id' as keyof TableDataRowType
    },
    {
        label: 'Producto',
        colSpan: 1,
        starting: '',
        isPrincipal: true,
        key: 'productName' as keyof TableDataRowType
    },
    {
        label: 'cat-1 $',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'price_cat_1' as keyof TableDataRowType
    },
    {
        label: 'cat-2 $',
        colSpan: 1,
        starting: 'small',
        isPrincipal: false,
        key: 'price_cat_2' as keyof TableDataRowType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        isPrincipal: false,
        key: undefined
    }
]