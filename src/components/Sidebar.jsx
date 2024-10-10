import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import logo from '../assets/novellogo.jpeg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const CustomListIcon = styled(ListItemIcon)({
    minWidth : "40px"
  })
  
  const CustomImage = styled('img')({
    width:'35px',
    height:"35px",
    borderRadius:"50%",
    marginLeft:'5px',
    objectFit:"cover"
  })
  return (
    <Box width="100%" padding="10px">

    <Box display="flex" justifyContent="space-between" alignItems="center" padding="5px">
         <CustomImage src={logo}  alt='novel logo'/>
        <Typography variant="h6" component="h2" fontWeight="bold"> NOVEL OFFICE</Typography>
    </Box>
    <List
    sx={{ width: '100%'}}
    component="nav"
    aria-labelledby="nested-list-subheader"
    >
      
      <ListItemButton onClick={handleClick}>
        <CustomListIcon>
          <DashboardOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <CustomListIcon>
              <StarBorder />
            </CustomListIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </List>
          </Collapse>
          <ListItemButton>
        <CustomListIcon>
          <BookOnlineOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="Tickets" />
      </ListItemButton>
      <ListItemButton>
        <CustomListIcon>
          <DescriptionOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="Invoices" />
      </ListItemButton>
      <ListItemButton>
        <CustomListIcon>
          <AirplaneTicketOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="Bookings" />
      </ListItemButton>
      <ListItemButton>
        <CustomListIcon>
          <EmojiTransportationOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="GatePass" />
      </ListItemButton>
      <ListItemButton>
        <CustomListIcon>
          <PrintOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="PrintRequest" />
      </ListItemButton>
      <ListItemButton>
        <CustomListIcon>
          <DonutSmallOutlinedIcon />
        </CustomListIcon>
        <ListItemText primary="Expansion/Downsize" />
      </ListItemButton>
        </List>
        <Box  width="100%" >
            <h5 style={{marginLeft:"15px"}}>UPCOMING</h5>
            <List>
            <ListItemButton>
        <CustomListIcon>
          <LocalParkingIcon />
        </CustomListIcon>
        <ListItemText primary="Visitor Parking Pass" />
      </ListItemButton>
            </List>
        </Box>
   </Box>
   
  );
}
