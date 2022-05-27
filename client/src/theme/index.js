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
            fontWeight: 700,
            fontSize: "1rem"
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1
        }
    },
    background: {
        gradientBackground: {
            backgroundColor: "#7f5a83",
            backgroundImage: "linear-gradient(315deg, #7f5a83 0%, #0a112c 74%)",
            backdropFilter: "blur(10px)",
            color: "white",
            padding: "0.8em 1em",
            marginBottom: "1em"
        }
    },
})