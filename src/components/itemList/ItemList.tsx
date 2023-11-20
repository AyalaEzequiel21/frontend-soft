import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { MenuItem } from '../../utilities/mainList';

interface itemListProps {
    item: MenuItem
    setSelected: (selection: string)=> void
}

export const ItemList: React.FC<itemListProps> = ({item, setSelected}) => {
    return (
        <ListItemButton onClick={() => setSelected(item.value)}> 
            <ListItemText>
                <Typography sx={{fontSize: '1.3rem', color: '#fff'}}>
                    <ListItemIcon sx={{color: '#fff'}}>
                        {item.icon}
                    </ListItemIcon>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItemButton>
    )
}