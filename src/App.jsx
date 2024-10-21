import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './Routes/Routes'
const App = () => {
  const routing = useRoutes(router);
  return (

    <>
      {routing}
    </>
  )
}

export default App
