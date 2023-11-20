import { Drawer, Box, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import { mainList } from '../../utilities/mainList';
import { ItemList } from '../itemList/ItemList';
import { CheckMediumScreen } from '../../utilities/utilityFunction/checkMediaQuery';

interface DrawerCustomProps {
  isOpen: boolean;
  onClose: () => void;
  handleSelect: (selection: string) => void
}

export const DrawerCustom: React.FC<DrawerCustomProps> = ({ isOpen, onClose, handleSelect }) => {

  const theme = useTheme()
  const isMediumSize = CheckMediumScreen()
  
  const drawerContent = (
    mainList.map(item => <ItemList item={item} setSelected={handleSelect}/>)
  )

  return (
    <Drawer 
      anchor="left"
      open={isMediumSize ? true : isOpen}
      onClose={onClose}
      variant={isMediumSize? "permanent" : "temporary"}
      sx={{
        zIndex: 0,
        height: "100%",
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.primary.main,
          paddingTop: "20px",
          width: 250,
        },
      }}
    >
      <Box 
        component={'img'}
        src={logo}
        alt='Logo'
        sx={{
          height: isMediumSize? 170 : 140, 
          width: isMediumSize? 220 : 190,
          marginLeft: 2
        }}
      />
      <List>
        {drawerContent}
      </List>
    </Drawer>
  )
};
