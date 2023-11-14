import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280
    }
  },
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#4CAF50',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Add more typography configurations as needed
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Additional style overrides for the Button component
      },
    },
    MuiTextField: {
      styleOverrides: {
        // Additional style overrides for the TextField component
      },
    },
    // Add more component-specific overrides as needed
  },
});

export default theme;
