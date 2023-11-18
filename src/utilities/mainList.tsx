import { AccountBox, ShoppingCart, Payment, Assessment, FormatListBulleted } from '@mui/icons-material';

export interface MenuItem {
    label: string;
    icon: React.ReactElement;
    value: string;
  }  

export const mainList = [
    {
        label: "Clientes",
        icon: <AccountBox/>,
        value: "clientes"
    },
    {
        label: "Ventas",
        icon: <ShoppingCart/>,
        value: "ventas"
    },
    {
        label: "Pagos",
        icon: <Payment/>,
        value: "pagos"
    },
    {
        label: "Reportes",
        icon: <Assessment/>,
        value: "reportes"
    },
    {
        label: "Listas",
        icon: <FormatListBulleted/>,
        value: "listas"
    }
]