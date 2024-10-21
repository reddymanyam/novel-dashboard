import React from 'react'
import './App.css'
import { BrowserRouter, useRoutes} from 'react-router-dom'
import Routes from './Routes/Routes';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout';

const App = () => {
  // const routing = useRoutes(Routes);
  return (
   <>
   <Layout />
   </>
  )
}

export default App
