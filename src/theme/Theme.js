import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#000'
        }
    },
    layout: {
        // drawerWidth: 500
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: '',
                    "&:hover": {
                        backgroundColor: '#000',
                        color: '#fff'
                    },
                    "&:hover .MuiListItemIcon-root": {
                        color: '#fff',
                    },
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '2px',
                    width: '100%',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: '#f00'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // borderRadius: '15px',
                    // fontWeight: '600',
                    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                },
                fullWidth: {
                    maxWidth: ''
                }
            }
        },

    }
})

export default Theme;