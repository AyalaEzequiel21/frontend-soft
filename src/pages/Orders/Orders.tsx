import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { ordersHeaderItem } from "@/data/headersTable/ordersHeaderItems"
import { ordersList } from "@/data/sectionsData/ordersList"

interface ordersProps {}

export const Orders: React.FC<ordersProps> = () => {
    return <ResultsSectionLayout title="Ordenes de venta" headItems={ordersHeaderItem} dataRows={ordersList}/>
}