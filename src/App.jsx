import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './Routes/Routes'
const App = () => {
  const routing = useRoutes(router);
  return (
<<<<<<< HEAD
   <>
   <Layout />
   </>
=======
    <>
      {routing}
    </>
>>>>>>> 5ddd4feaa5d43d3083f99a2acb83dd517231a04f
  )
}

export default App
