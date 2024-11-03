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

  const SidebarcompList = [
    { id: 2, title: "Tickets", link: "/tickets", icon: <BookOnlineOutlinedIcon /> },
    { id: 3, title: "Invoices", link: "/invoices", icon: <DescriptionOutlinedIcon /> },
    { id: 4, title: "Bookings", link: "/bookings", icon: <AirplaneTicketOutlinedIcon /> },
    { id: 5, title: "GatePass", link: "/gatepass", icon: <PrintOutlinedIcon /> },
    { id: 6, title: "PrintRequest", link: "/printrequest", icon: <EmojiTransportationOutlinedIcon /> },
    { id: 7, title: "Expansion/Downsize", link: "/expansion", icon: <DonutSmallOutlinedIcon /> },
  ];

  return (
    <Box width="100%" padding="10px" height="100%" overflowY="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="5px">
        <CustomImage src={logo} alt='novel logo' />
        <Typography variant="h6" component="h2" fontWeight="bold">NOVELOFFICE</Typography>
      </Box>
      <List
        sx={{ width: '100%', marginLeft: "10px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          component={Link}
          to="/dashboard"
          onClick={() => {
            handleListItemClick(0);
            handleClick();
          }}
          style={{
            backgroundColor: selectedIndex === 0 ? '#5d87ff' : 'transparent',
            borderRadius: "10px"
          }}
        >
          <CustomListIcon>
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
                backgroundColor: selectedIndex === 1 ? '#5d87ff' : 'transparent',
                borderRadius: "10px"
              }}
            >
              <CustomListIcon>
                <StarBorder />
              </CustomListIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        {SidebarcompList.map((list) => (
          <ListItemButton
            key={list.id}
            component={Link}
            to={list.link}
            onClick={() => handleListItemClick(list.id)}
            style={{
              backgroundColor: selectedIndex === list.id ? '#5d87ff' : 'transparent',
              borderRadius: "10px"
            }}
          >
            <CustomListIcon>
              {list.icon}
            </CustomListIcon>
            <ListItemText primary={list.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
