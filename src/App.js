import React from 'react';
import MainRoute from './routes/MainRoute';
// import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme/Theme';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MainRoute />
    </ThemeProvider>
  )
}

export default App