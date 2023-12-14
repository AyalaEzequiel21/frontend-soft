import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { reportsHeaderItem } from "@/data/headersTable/reportsHeaderItems"
import { reportsList } from "@/data/sectionsData/reportsList"

interface reportsProps {}

export const Reports: React.FC<reportsProps> = () => {
    return <ResultsSectionLayout title="Reportes de pago" headItems={reportsHeaderItem} dataRows={reportsList}/>
}