import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    color: {
        primary: '#3498db',
        secondary: '#006064',
        error: '#bf360c',
        textColor: 'white',
    },

    typography: {
        fontFamily: 'sans-serif',
    },

    shape: {
        borderRadius: 4,
        backgroundColor: '#4a148c',
        color: '#FFFFFF',
        borderColor: '#d81b60',
    },
});

export default theme;
