import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#C69585',
  primaryVarient: '#EBDBD5',
  secondary: '#58362A',
  error: '#f44336',
  background: '#FBF8F7'
};

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
      main: colors.primary,
      varient: colors.primaryVarient
    },
    secondary: {
      main: '#58362A'
    },
    error: {
      main: '#f44336'
    },
    background: {
      default: '#FBF8F7'
    }
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400
    }
  },
  spacing: 15,
  shape: {
    borderRadius: 10
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          fontSize: 16,
          width: '100%',
          '&:hover': {
            backgroundColor: '#EBDBD5'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '30px',
          width: '100%',
          '& label': {
            color: 'white'
          },
          '& input': {
            color: 'white',
            borderBottom: ' 2px solid white'
          }
        }
      }
    }
  }
});

export default theme;
