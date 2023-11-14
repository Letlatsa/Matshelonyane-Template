import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#C69585',
  primaryVarient: '#EBDBD5',
  secondary: '#58362A',
  error: '#f44336',
  warning: '#FFC107',
  info: '#2196f3',
  success: '#4caf50',
  background: '#FBF8F7'
};

const shadows = {
  default: '0px 4px 4px rgba(0, 0, 0, 0.25)'
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
      main: colors.secondary
    },
    error: {
      main: colors.error
    },
    background: {
      default: colors.background
    },
    warning: {
      main: colors.warning
    }
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      textShadow: shadows.default
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      textShadow: shadows.default
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
      textShadow: shadows.default
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
          width: '100%',
          '&:hover': {
            backgroundColor: '#EBDBD5'
          }
        },
        standard: {
          backgroundColor: '#EBDBD5',
          color: '#58362A',
          fontSize: 18
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
  },
  MuiFormControl: {
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
      },
      standard: {
        backgroundColor: '#EBDBD5',
        color: '#58362A',
        fontSize: 18
      }
    }
  }
});

export default theme;
