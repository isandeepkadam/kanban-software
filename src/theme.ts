import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003060',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '1rem',
          fontWeight: 'bold',
        },
        subheader: {
          fontSize: '.6rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorInfo: {
          background: '#FFD700',
        },
        colorSuccess: {
          background: '#222222',
        },
        colorError: {
          background: '#DB1F48',
        },
      },
    },
  },
})
