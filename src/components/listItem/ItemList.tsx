import { MenuItem } from "@/data/ListMenuOptions";
import { ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom";

interface itemListProps {
    option: MenuItem,
    onCloseMenu: ()=> void,
}

export const ItemList: React.FC<itemListProps> = ({option, onCloseMenu, }) => {
    const {palette} = useTheme()
    const navigate = useNavigate()
    
    const handleClickButton = () => {
        navigate(`/${option.value}`)
        onCloseMenu()
    }
    return (
        <ListItemButton onClick={() => handleClickButton()}>
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
