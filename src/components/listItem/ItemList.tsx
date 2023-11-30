import { MenuItem } from "@/data/ListMenuOptions";
import { ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React from "react";

interface itemListProps {
    option: MenuItem,
    onCloseMenu: ()=> void,
    setSelected: (selection: string)=> void
}

export const ItemList: React.FC<itemListProps> = ({option, onCloseMenu, setSelected}) => {
    const {palette} = useTheme()
    
const handleClickButton = (value: string) => {
    setSelected(value)
    onCloseMenu()
}
    return (
        <ListItemButton onClick={() => handleClickButton(option.value)}>
            <ListItemText>
                    <ListItemIcon sx={{color: palette.info.main, '&:hover': {color: palette.secondary.main}}}>
                        {option.icon}
                        <Typography variant="h3"  sx={{ml: '20px', color: palette.info.main, '&:hover': {color: palette.secondary.main}}}>
                            {option.label}
                        </Typography>
                    </ListItemIcon>
            </ListItemText>
        </ListItemButton>
        )
    }
