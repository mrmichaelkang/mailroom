import { makeStyles } from "@material-ui/core";

const msgStyles = makeStyles({
  flashContainer: {
    position: "absolute",
    opacity: 0,
    fontSize: "1.2rem",
    textAlign: "center",
    padding: "30px",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: "$fade 5s linear",
  },
  hide: {
    display: "none"
  },
  success: {
    backgroundColor: "#99DDCC",
    
  },
  error: {
    backgroundColor: "#FFE2E2",
  },
  loading: {
    backgroundColor: "#99DDCC",
  },
  "@keyframes fade": {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 0,
      
    }
  }
});

function FlashMessage({errorMessage, updatedMessage, loadingMessage}) {
  const classes = msgStyles();
  
  return(
    <div className={classes.flashContainer}>
      <span className={errorMessage ? classes.error : classes.hide}>{errorMessage}</span>
      <span className={updatedMessage ? classes.success :classes.hide}>{updatedMessage}</span>
      <span className={loadingMessage ? classes.loading : classes.hide}>{loadingMessage}</span>
    </div>
  )
}

export default FlashMessage;