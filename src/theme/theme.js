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
          fontSize: 18,
          borderRadius: '15px',
          width: '100%',
          color: colors.primary,
          '&:hover': {
            backgroundColor: colors.secondary
          }
        },
        contained: {
          backgroundColor: colors.primaryVarient,
          color: colors.primary,
          boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
          fontSize: 18,
          '&:hover': {
            backgroundColor: colors.secondary,
            transition: 'ease-in .3s'
          }
        },
        text: {
          color: colors.primary,
          textShadow: shadows.default,
          fontWeight: 700,
          '&:hover': {
            backgroundColor: 'transparent'
          }
        },
        outlined: {
          color: colors.primary,
          boxShadow: shadows.default
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
        },
        standard: {
          marginBottom: '10px',
          width: '100%',
          '& input': {
            color: 'white',
            borderBottom: ' 3px solid white'
          },
          '& label': {
            color: 'white'
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
          color: colors.primary,
          fontSize: 18
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5
            }
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff'
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              //theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
              colors.primary
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            //opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
          }
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2
          //backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          // opacity: 1,
          // transition: theme.transitions.create(['background-color'], {
          //   duration: 500
          // })
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        backgroundColor: '#ffffff',
        color: '#000000',
        boxShadow: 'none',
      }
    },
    MuiToolbar: {
      styleOverrides: {
        height: '70px'
      }
    }
  }
});

export default theme;
