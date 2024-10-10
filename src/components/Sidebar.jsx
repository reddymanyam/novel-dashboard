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

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const CustomListIcon = styled(ListItemIcon)({
    minWidth : "40px"
  })

  return (
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
   
  );
}
