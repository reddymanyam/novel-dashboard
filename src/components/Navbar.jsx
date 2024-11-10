import React from 'react';
import Box from '@mui/material/Box';
import ReorderIcon from '@mui/icons-material/Reorder';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import profilepic from '../assets/profile_icon.png';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const CustomImage = styled('img')({
  width: '30px',
  height: "30px",
  borderRadius: "50%",
  marginLeft: '5px',
  objectFit: "cover"
});

const Navbar = ({ toggleTheme, mode, handleClick }) => {
  return (
    <Box width="100%" display='flex' justifyContent="space-between" alignItems="center" padding="10px 20px">
      <ReorderIcon onClick={handleClick} />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <IconButton onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <HelpOutlineOutlinedIcon sx={{ marginRight: "15px" }} />
        <NotificationsActiveOutlinedIcon sx={{ marginRight: "15px" }} />
        <CustomImage src={profilepic} alt='profilepc' />
      </Box>
    </Box>
  );
};

export default Navbar;
