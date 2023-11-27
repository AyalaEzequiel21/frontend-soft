import { AccountBox, Assessment } from '@mui/icons-material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ReceiptIcon from '@mui/icons-material/Receipt';

export interface MenuItem {
    label: string;
    icon: React.ReactElement;
    value: string;
  }  

export const ListMenuOptions = [
    {
        label: "Clientes",
        icon: <AccountBox/>,
        value: "clientes"
    },
    {
        label: "Ventas",
        icon: <ReceiptIcon/>,
        value: "ventas"
    },
    {
        label: "Productos",
        icon: <ListAltIcon/>,
        value: "ventas"
    },
    {
        label: "Pagos",
        icon: <PaidIcon/>,
        value: "pagos"
    },
    {
        label: "Reportes",
        icon: <Assessment/>,
        value: "reportes"
    },
    {
        label: "Listas",
        icon: <ChecklistIcon/>,
        value: "listas"
    },
    {
        label: "Usuarios",
        icon: <GroupIcon/>,
        value: "usuarios"
    }
]