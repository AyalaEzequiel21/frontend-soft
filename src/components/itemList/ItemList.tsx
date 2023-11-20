import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItem } from '../../utilities/mainList';

interface itemListProps {
    item: MenuItem
    setSelected: (selection: string)=> void
}

export const ItemList: React.FC<itemListProps> = ({item, setSelected}) => {
    return (
        <ListItemButton onClick={() => setSelected(item.value)}>
            <ListItemText sx={{color: '#fff'}}>
                <ListItemIcon sx={{color: '#fff'}}>
                    {item.icon}
                </ListItemIcon>
                {item.label}
            </ListItemText>
        </ListItemButton>
    )
}