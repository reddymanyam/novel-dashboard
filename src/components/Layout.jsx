import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

const Layout = ({toggleTheme, mode}) => {

    const handleClick = () =>{

    } 
  return (
    <>
        <Box display="flex" width="100%" height="100vh">
            <Box  height="50px" position="fixed" width="calc(100% - 210px)" display='flex' justifyContent="flex-start" marginLeft="210px" top="0">
                <Navbar toggleTheme={toggleTheme} mode={mode} handleClick={handleClick}/>
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" height="100vh" width="210px" position='fixed' overflowY="scroll" top="0px">
                <Sidebar handleClick={handleClick} />
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" overflow="auto" width='calc(100% - 210px)' height="calc(100% - 50px)"  padding="30px"  marginLeft="210px" top="35px" >
                <Outlet />
            </Box>
        </Box>
    </>
  )
}

export default Layout