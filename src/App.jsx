import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './Routes/Routes'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const App = () => {
  const [mode, setMode] = React.useState('light');
  
  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light' ? {
        background: { paper: '#fff' },
        text: { primary: '#000', secondary: '#555' },
        icons: { primary: '#000', secondary: '#555' }
      } : {
        background: { paper: '#1A2027' },
        text: { primary: '#fff', secondary: '#bbb' },
        icons: { primary: '#fff', secondary: '#bbb' }
      }),
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const routing = useRoutes(router(toggleTheme, mode));

  return (

    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
    </>
  )
}

export default App
