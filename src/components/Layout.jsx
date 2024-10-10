import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <>
        <Box display="flex" width="100%" height="100vh">
            <Box width="100%" height="35px" position="fixed" display='flex' justifyContent="flex-start" bgcolor="white">
                <Navbar />
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" height="calc(100% - 35px)" width="210px" position='fixed' bgcolor="lightblue" top="35px">
                <Sidebar />
            </Box>
            <Box display='flex' justifyContent="center" aliginItems="center" overflow="auto" width='calc(100% - 210px)' height="calc(100% - 35px)"  padding="30px"  marginLeft="210px" top="35px">
                <Outlet />
            </Box>
        </Box>
    </>
  )
}

export default Layout