import { makeStyles } from '@material-ui/core';
import LogoImg from '../media/parcel.jpg';

const useStyles = makeStyles({
  container: {
    "@media (max-width: 700px)": {
      display: "none"
    },
  },
  logoImg: {
    width: "720px",
    height: "auto",
    margin: "150px auto 0",
    // paddingLeft: "100px",
    "@media (max-width: 1220px)": {
      width: "600px",
      paddingTop: "60px"
    },
    "@media (max-width: 1050px)": {
      width: "550px",
      paddingTop: "70px"
    }
  }
});

function Logo() {
  const classes = useStyles();
  return(
    <div>
      <img className={classes.logoImg} src={LogoImg} alt='parcel'></img>
    </div>
  )
}

export default Logo;