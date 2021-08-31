import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import navbarStyles from "./NavbarStyles";

function Navbar() {
  const classes = navbarStyles();

  const handleSignout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  return(
    <AppBar className={classes.navbar}  position="static">
      <Toolbar>
        <Typography className={classes.navbarLogo} variant="h4"><a href="/mailroom">Mailroom</a></Typography>
        <div className={classes.buttonContainer}>
          <Typography variant="body1">{localStorage.getItem('name')}</Typography>
          <Button  onClick={handleSignout} className={classes.btn} size="medium">Signout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
