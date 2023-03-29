import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette:{
      mode:paletteType,
      background:{
        default: paletteType === 'light'? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
