import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { paymentsHeaderItem } from "@/data/headersTable/paymentsHeaderItems"
import { paymentsList } from "@/data/sectionsData/paymentsList"

interface paymentsProps {}

export const Payments: React.FC<paymentsProps> = () => {
    return <ResultsSectionLayout title="Pagos" headItems={paymentsHeaderItem} dataRows={paymentsList}/>
}