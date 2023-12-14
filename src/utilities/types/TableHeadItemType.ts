import { TableDataRowType } from "./TableDataRowType"

export type TableHeadItemType = {
    label: string,
    colSpan: number,
    starting: string,
    isPrincipal: boolean,
    key: keyof TableDataRowType | undefined
}