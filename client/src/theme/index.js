import { createTheme } from "@material-ui/core/styles";

const purple = "#0D0F32";
const pink = "#FC5FFF";


export default createTheme({
    palette: {
        common: {
            purple: purple,
            pink: pink
        },
        primary: {
            main: purple
        },
        secondary: {
            main: pink
        }
    },
    typography: {
        button: {
            textTransform: "none",
            fontFamily: "Press Start 2P, cursive",
            fontWeight: 700,
            fontSize: "1rem"
        },
        fontFamily: [ 
            "Poppins, sans-serif",
            "Press Start 2P, cursive"
        ]
    }
})