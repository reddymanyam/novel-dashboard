import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </List>
          </Collapse>
          <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Tickets" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Bookings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="GatePass" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="PrintRequest" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Expansion/Downsize" />
      </ListItemButton>
        </List>
      
   
  );
}
