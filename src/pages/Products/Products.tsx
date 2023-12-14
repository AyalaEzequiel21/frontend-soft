import { ResultsSectionLayout } from "@/components/common/ResultsSectionLayout"
import { productHeaderItem } from "@/data/headersTable/productsHeaderItems"
import { productsList } from "@/data/sectionsData/productsList"

interface productsProps {}

export const Products: React.FC<productsProps> = () => {
    return <ResultsSectionLayout title="Productos" headItems={productHeaderItem} dataRows={productsList}/>
}