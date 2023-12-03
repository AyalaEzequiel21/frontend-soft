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
        value: "clients"
    },
    {
        label: "Ventas",
        icon: <ReceiptIcon/>,
        value: "sales"
    },
    {
        label: "Productos",
        icon: <ListAltIcon/>,
        value: "products"
    },
    {
        label: "Pagos",
        icon: <PaidIcon/>,
        value: "payments"
    },
    {
        label: "Reportes",
        icon: <Assessment/>,
        value: "reports"
    },
    {
        label: "Listas",
        icon: <ChecklistIcon/>,
        value: "orders"
    },
    {
        label: "Usuarios",
        icon: <GroupIcon/>,
        value: "users"
    }
]