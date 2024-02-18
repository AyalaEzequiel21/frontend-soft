import { List, ListItem, ListItemText, Typography } from "@mui/material"


interface infoCardContentProps {
    title: string,
    data: Record<string, string|number|boolean>
}

export const InfoCarContent: React.FC<infoCardContentProps> = ({title, data}) => {
    return (
        <>
            <Typography variant="h4">{title}</Typography>
            <List>
                {Object.entries(data).map(([key, value]) => (
                    <ListItem key={key} sx={{p: 0}}>
                        <ListItemText primary={`${key.replace(/_/g, " ")}: ${typeof value === 'string' ? value.replace(/_/g, " ") : value}`}/>
                    </ListItem>
        ))}
            </List>
        </>
    )
}