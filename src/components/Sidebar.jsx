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
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import { Link } from 'react-router-dom';

const CustomListIcon = styled(ListItemIcon)({
  minWidth: "40px"
});

const CustomImage = styled('img')({
  width: '35px',
  height: "35px",
  borderRadius: "50%",
  marginLeft: '5px',
  objectFit: "cover"
});

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const Lists = [
    { id: 2, title: "Tickets", icon: <BookOnlineOutlinedIcon /> },
    { id: 3, title: "Invoices", icon: <DescriptionOutlinedIcon /> },
    { id: 4, title: "Bookings", icon: <AirplaneTicketOutlinedIcon /> },
    { id: 5, title: "GatePass", icon: <PrintOutlinedIcon /> },
    { id: 6, title: "PrintRequest", icon: <EmojiTransportationOutlinedIcon /> },
    { id: 7, title: "Expansion/Downsize", icon: <DonutSmallOutlinedIcon /> },

  ]
  return (

    <Box width="100%" padding="10px" overflowY="scroll">
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="5px">
        <CustomImage src={logo} alt='novel logo' />
        <Typography variant="h6" component="h2" fontWeight="bold"> NOVEL OFFICE</Typography>
      </Box>
      <List
        sx={{ width: '100%', marginLeft: "10px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          component={Link} to="/dashboard"
          onClick={() => {
            handleListItemClick(0);
            handleClick();
          }}
          style={{
            backgroundColor: selectedIndex === 0 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }} >
          <CustomListIcon >
            <DashboardOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleListItemClick(1)}
              style={{
                backgroundColor: selectedIndex === 1 ? '#5d87ff' : 'transparent', borderRadius: "10px"
              }}
            >
              <CustomListIcon>
                <StarBorder />
              </CustomListIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          component={Link} to="/tickets"
          onClick={() => handleListItemClick(2)}
          style={{
            backgroundColor: selectedIndex === 2 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <BookOnlineOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="Tickets" />
        </ListItemButton>
        <ListItemButton
          component={Link} to="/invoices"
          onClick={() => handleListItemClick(3)}
          style={{
            backgroundColor: selectedIndex === 3 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <DescriptionOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="Invoices" />
        </ListItemButton>
        <ListItemButton
          component={Link} to="/bookings"
          onClick={() => handleListItemClick(4)}
          style={{
            backgroundColor: selectedIndex === 4 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <AirplaneTicketOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="Bookings" />
        </ListItemButton>
        <ListItemButton
          component={Link} to="/gatepass"
          onClick={() => handleListItemClick(5)}
          style={{
            backgroundColor: selectedIndex === 5 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <EmojiTransportationOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="GatePass" />
        </ListItemButton>
        <ListItemButton
          component={Link} to="/printrequest"
          onClick={() => handleListItemClick(6)}
          style={{
            backgroundColor: selectedIndex === 6 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <PrintOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="PrintRequest" />
        </ListItemButton>
        <ListItemButton
          component={Link} to="/expansion"
          onClick={() => handleListItemClick(7)}
          style={{
            backgroundColor: selectedIndex === 7 ? '#5d87ff' : 'transparent', borderRadius: "10px"
          }}
        >
          <CustomListIcon>
            <DonutSmallOutlinedIcon />
          </CustomListIcon>
          <ListItemText primary="Expansion/Downsize" />
        </ListItemButton>
      </List>
      <Box width="100%">
        <h5 style={{ marginLeft: "15px", marginTop: "15px" }}>UPCOMING</h5>
        <List>
          <ListItemButton
            component={Link} to="/gatepass"
            onClick={() => handleListItemClick(8)}
            style={{
              backgroundColor: selectedIndex === 8 ? '#5d87ff' : 'transparent', borderRadius: "10px"
            }}
          >
            <CustomListIcon>
              <LocalParkingRoundedIcon />
            </CustomListIcon>
            <ListItemText primary="Visitor Parking Pass" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
