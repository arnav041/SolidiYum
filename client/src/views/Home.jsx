import React, { useState } from 'react';
import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import { Box, Container, Grid, List, ListItemText, ListItem, Tab, Typography, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: "12em auto 0",
    padding: "5em ",
    maxWidth: 1620,
    // background: "#aaed4a"
  },
  sectionWrapper: {
    width: "100%",
    color: "rgb(31, 31, 31)",
    background: "rgb(244, 244, 245)",
    boxShadow: "rgb(218 218 222) 1px 1px 2px, rgb(255 255 255) -1px -1px 2px",
    padding: "3em"
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  primaryListText: {
    ...theme.typography.h2,

  },
  tabRoot: {
    flexGrow: 1,
    width: '100%',
  }
}))

export default function Home() {
  const styles = useStyles()
  const theme = useTheme()
  const [tab, setTab] = useState(0)
  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }
  return (
    <div className={styles.mainContainer} >
      <section>
        <Grid container spacing={3}  >
          <Grid item xs={12} lg={4} >
            <Box className={styles.sectionWrapper} >
              <List>
                <ListItem disableGutters className={styles.listItem}  >
                  <Typography variant="h2" className={styles.primaryListText} >Total tokens</Typography>
                  <Typography variant="h3" className={styles.secondaryListText} >200,000</Typography>
                </ListItem>
                <ListItem disableGutters className={styles.listItem}  >
                  <Typography variant="h2" className={styles.primaryListText} >Total tokens</Typography>
                  <Typography variant="h3" className={styles.secondaryListText} >200,000</Typography>
                </ListItem>
                <ListItem disableGutters className={styles.listItem}  >
                  <Typography variant="h2" className={styles.primaryListText} >Total tokens</Typography>
                  <Typography variant="h3" className={styles.secondaryListText} >200,000</Typography>
                </ListItem>

              </List>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8} >
            <Box className={styles.sectionWrapper} >
              <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                aria-label="disabled tabs example"
                disableRipple
              >
                <Tab label="State" />
                <Tab label="Withdraw" />
              </Tabs>
              <TabPanel value={tab} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={tab} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={tab} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </section>
    </div>
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