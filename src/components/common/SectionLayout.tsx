import {Grid} from "@mui/material"
import { ActionCard } from "@/components/actionCard/ActionCard"
import * as actions from '@/data/actionsForSection'


interface sectioLayoutProps {
    sectionSelected: string
}

export const SectionLayout: React.FC<sectioLayoutProps> = ({sectionSelected}) => {

    const renderSection = (sectionSelected: string) => {
        switch (sectionSelected) {
        case 'clientes':
            return actions.actionsClientsSection;
        case 'ventas':
            return actions.actionsSalesSection;
        case 'pagos':
            return actions.actionsPaymentsSection;
        case 'reportes':
            return actions.actionsReportsSection;
        case 'listas':
            return actions.actionsOrdersSection;
        case 'productos':
            return actions.actionsProductsSection;
        case 'usuarios':
            return actions.actionsUsersSection;
        // Agrega más casos según tus secciones

        }
    };

    return (
        <Grid container sm={7.7} md={8.5} lg={9} alignItems='center' justifyContent='center' sx={{ maxHeight: '100%', width: '100%', margin: '0 auto'}} > 
            {renderSection(sectionSelected)?.actions.map(action => <ActionCard label={action.actionName} iconAction={action.iconAction} iconSection={renderSection(sectionSelected)?.iconSection} key={action.actionName}/>)}
        </Grid>
    )
}