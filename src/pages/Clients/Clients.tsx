import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { clientHeaderItems } from "@/data/headersTable/clientsHeaderItems"
import { clientsList } from "@/data/sectionsData/clientsList"

export const Clients = () => {
    return <ResultsSectionLayout title="Clientes" headItems={clientHeaderItems} dataRows={clientsList}/>
}
 