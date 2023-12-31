import { ListMenuOptions } from "@/data/ListMenuOptions"
import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Drawer, List,  useTheme, Box } from "@mui/material"
import { ItemList } from "../listItem/ItemList"
import logo from '@/assets/logo.png'

interface sideBarProps {
    isOpen: boolean,
    onClose: ()=> void,
}

export const SideBar: React.FC<sideBarProps> = ({isOpen, onClose}) => {

    const {palette} = useTheme()
    const isMediumSize = CheckMediumScreen()

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
            variant={isMediumSize? "permanent" : "temporary"}
            sx={{  
                '& .MuiDrawer-paper': {
                    border: 'none', 
                    borderRadius: isMediumSize ? '0' : '0 0.5em 0 0', 
                    mt: isMediumSize ? '64px' : '60px',
                    height: `calc(100% - ${isMediumSize ? '84px' : '60px'})`,
                    width: {xs: '200px', sm: '210px', md: '220px', lg: '250px'}
                }
            }}
        >
            <Box 
                bgcolor={palette.primary.main} 
                height={'100%'} 
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Box 
                    component={'img'}
                    src={logo}
                    alt="logo"
                    sx={{
                        height: isMediumSize? 130 : 110, 
                        width: isMediumSize? 170 : 150,
                      }}
                />
                <List sx={{
                    bgcolor: palette.primary.main, 
                    }}>
                    
                    {ListMenuOptions.map(item => <ItemList onCloseMenu={onClose} option={item} key={item.value}/>)}
                </List>
            </Box>
        </Drawer>
    )
}