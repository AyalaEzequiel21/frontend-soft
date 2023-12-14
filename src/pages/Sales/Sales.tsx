import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { salesHeaderItem } from "@/data/headersTable/salesHeaderItems"
import { salesList } from "@/data/sectionsData/salesList"

interface salesProps {}

export const Sales: React.FC<salesProps> = () => {
    return <ResultsSectionLayout title="Ventas" headItems={salesHeaderItem} dataRows={salesList}/>
}