import { makeStyles } from "@material-ui/core";

const registerStyles = makeStyles({
  registerContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 470,
    border: '1px solid lightgray',
    borderRadius: 5,
    "& h1": {
      fontFamily: "Patrick Hand, sans-serif",
      fontSize: "3.5rem"
    },
    "& form": {
      marginTop: 25,
      fontFamily: "Lato, 'sans-serif"
    },
  },

  registerForm: {
    margin: '10px auto'
  },
  
  loginContainer: {
    width: 400,
    height: 60,
    border: '1px solid lightgray',
    borderRadius: 5,
    margin: "30px auto 0",
  },
  
  registerBtn: {
    width: 225,
    height: '100%',
    marginTop: 10,
    backgroundColor: "#BAD7DF",
    color: "#333",
    fontFamily: "Lato, sans-seriff",
    "&:hover": {
      backgroundColor: "#a9c6ce"
    }
  },
  
  loginText: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 16,
    fontFamily: "Lato, sans-seriff"
  },
  
  login: {
    // color: '#3f51b5',
    color: "#99DDCC",
    textDecoration: 'none'
  }
});

export default registerStyles;