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
                <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <ListItemIcon sx={{color: palette.text.primary}}>{option.icon}</ListItemIcon>
                    {option.label}
                </Typography>
            </ListItemText>
        </ListItemButton>
        )
    }
