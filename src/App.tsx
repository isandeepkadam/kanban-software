import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
