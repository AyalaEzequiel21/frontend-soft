import { ListMenuOptions } from "@/data/ListMenuOptions"
import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Drawer, List,  useTheme, Box } from "@mui/material"
import { ItemList } from "../listItem/ItemList"
import logo from '@/assets/logo.png'

interface sideBarProps {
    isOpen: boolean,
    onClose: ()=> void,
    setSelected: (selection: string) => void
}

export const SideBar: React.FC<sideBarProps> = ({isOpen, onClose, setSelected}) => {

    const {palette} = useTheme()
    const isMediumSize = CheckMediumScreen()

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
            variant={isMediumSize? "permanent" : "temporary"}
            sx={{  transitionDuration: '0.7s',
                '& .MuiDrawer-paper': {
                    border: 'none', 
                    borderRadius: isMediumSize ? '0' : '0 0.5em 0 0', 
                    mt: '57px', 
                    mb: '60px', 
                    width: isMediumSize? '300px' : '230px'
                }}}
        >
            <List sx={{bgcolor: palette.primary.main, height: '100%'}}>
                <Box 
                    component={'img'}
                    src={logo}
                    alt="logo"
                    sx={{
                        height: isMediumSize? 150 : 110, 
                        width: isMediumSize? 190 : 150,
                        marginLeft: isMediumSize? 0 : 1
                        
                      }}
                />
                {ListMenuOptions.map(item => <ItemList onCloseMenu={onClose} option={item} setSelected={setSelected} key={item.value}/>)}
            </List>
        </Drawer>
    )
}