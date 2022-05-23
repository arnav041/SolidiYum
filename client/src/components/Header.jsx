import React from "react";
import { AppBar, Button, CssBaseline, makeStyles, Toolbar, useScrollTrigger } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../soLogo.png"

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  logo: {
    height: '10em'
  },
  logoContainer: {
    padding: 0,
    marginLeft: "0.8em"
  },
  appbar: {
    paddingLeft: "2em",
    paddingRight: "2em",
  },
  accountButton: {
    ...theme.typography.button,
    marginLeft: "auto",
    height: "4em",
    width: "16em",
    color: theme.palette.common.pink
  }
}))


export default function Header() {
  const styles = useStyles()
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={styles.appbar} >
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={styles.logoContainer}
              disableRipple
            >
              <img
                src={logo}
                className={styles.logo}
                alt="solidiyumlogo"
              />
            </Button>
             <Button variant="outlined" color="secondary" className={styles.accountButton} >
                Connect 
             </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}