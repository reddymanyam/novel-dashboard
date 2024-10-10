import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <>
        <Box display="flex" width="100%" height="100vh">
            <Box width="100%" height="30px" position="fixed" display='flex' justifyContent="flex-start" bgcolor="white">
                <Navbar />
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" height="calc(100% - 30px)" width="175px" position='fixed' bgcolor="lightblue" top="30px">
                <Sidebar />
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" overflow="auto" width='calc(100% - 175px)' height="calc(100% - 30px)"  padding="30px"  marginLeft="175px" top="30px">
                <Outlet />
            </Box>
        </Box>
    </>
  )
}

export default Layout