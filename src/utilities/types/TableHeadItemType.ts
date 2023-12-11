import { TableDataRowType } from "./TableDataRowType"

export type TableHeadItemType = {
    label: string,
    colSpan: number,
    starting: string,
    key: keyof TableDataRowType | undefined
}