import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { userHeaderItem } from "@/data/headersTable/usersHeaderItems"
import { usersList } from "@/data/sectionsData/usersList"

interface usersProps {}

export const Users: React.FC<usersProps> = () => {
    return (
        <ResultsSectionLayout title="Usuarios" headItems={userHeaderItem} dataRows={usersList}/>
    )
}