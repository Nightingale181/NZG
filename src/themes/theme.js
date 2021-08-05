import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.25)',
    modalRadius: 10,
    border: '1px solid #BDBDBD',
    buttonPadding: '0 15px',
    typography: { // html font = 16px
        body1: {
            fontSize: '1.3125rem' // 21px
        },
        body2: {
            fontSize: '1.125rem' // 18px
        },
        subtitle1: {
            fontSize: '1rem' // 16px
        },
        h4: {
            fontSize: '2rem' // 32px
        },
        h5: {
            fontSize: '1.6875rem' // 27px
        },
        h2: {
            fontSize: '4rem' // 64px
        },
        button: {
            fontSize: '1.125rem' // 18px
        }
    },
    palette: {
        primary: {
            main: '#2DACFD',
            dark: '#289DE7'
        },
        secondary: {
            main: '#1AD365',
            light: '#1ECD66',
            dark: '#15A750'
        },
        orange: '#FF8901',
        text: {
            primary: '#0D0D0D',
            secondary: '#6C6C6C',
            light: '#9C9C9C',
            darkGray: '#333333',
            gray: '#323030',
            lightGray: '#BDBDBD',
            authGray: '#4E535B'
        },
        fadedBlue: 'rgba(45, 172, 253, 0.3)'
    }
})