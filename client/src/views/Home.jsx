import React from 'react';
import { makeStyles, useTheme } from "@material-ui/styles";
import { Container, Grid, List, ListItemText } from '@material-ui/core';
import { Typography } from 'antd';


const useStyles = makeStyles((theme) => ({
  homeContainer: {
    marginTop: "12em",
    padding: "3em",
    // backgroundColor: "orange"
  },
  sectionContainer: {
    margin: "2em",
  },
  backgroundImage: {

  },
  gridContainer: {
    padding: "3em 2.5em" ,
    margin: 0,
    marginTop: "2em",
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "rgba(255, 255, 255, .15)",  
    backdropFilter: "blur(5px)"
  },

}))


export default function Home() {
  const styles = useStyles()
  const theme = useTheme()
  return (
    <Container maxWidth="lg" className={styles.homeContainer} >
      <div className={styles.sectionContainer}  >
        <div className={styles.backgroundImage} />
        <Grid container  wrap='nowrap' className={styles.gridContainer} >
        </Grid>
      </div>
    </Container>
  )
}

//  {/* 👨‍💼 Your account is in the top right with a wallet at connect options */}
//  <div style={{ position: "fixed", textAlign: "right", right: 0, top: 0, padding: 10 }}>
//  <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
//    <Account
//      useBurner={USE_BURNER_WALLET}
//      address={address}
//      localProvider={localProvider}
//      userSigner={userSigner}
//      mainnetProvider={mainnetProvider}
//      price={price}
//      web3Modal={web3Modal}
//      loadWeb3Modal={loadWeb3Modal}
//      logoutOfWeb3Modal={logoutOfWeb3Modal}
//      blockExplorer={blockExplorer}
//    />
//  </div>
// </div>