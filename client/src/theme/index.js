import {createTheme} from "@material-ui/core/styles";

const navyBlue = "#0D0F32";
const pink = "#cc57c7";


export default createTheme({
    palette : {
        common: {
            navyblue: navyBlue, 
            pink: pink
        },
        primary: {
            main: navyBlue
        },
        secondary: {
            main: pink
        }
    }
})