import { useState } from 'react';
import { Drawer, Box, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import { mainList } from '../../utilities/mainList';
import { ItemList } from '../itemList/ItemList';
import { CheckMediumScreen } from '../../utilities/utilityFunction/checkMediaQuery';

interface DrawerCustomProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerCustom: React.FC<DrawerCustomProps> = ({ isOpen, onClose }) => {

  const theme = useTheme()
  const isMediumSize = CheckMediumScreen()
  const [selected, setSelected] = useState('')
  const handleSelect = (selection: string) => {
    setSelected(selection)
  }

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
          marginTop: 8,
          width: isMediumSize ? 280 : '70%',
        },
      }}
    >
      <Box 
        component={'img'}
        src={logo}
        alt='Logo'
        sx={{
          height: isMediumSize? 170 : 150, 
          width: isMediumSize? 220 : 200,
          margin: "0 auto"
        }}
      />
      <List sx={{margin: '0 auto'}}>
        {drawerContent}
        {selected}
      </List>
    </Drawer>
  )
};
// {mainList.map(item => <ItemList item={item} setSelected={handleOptionClick}/>)}
