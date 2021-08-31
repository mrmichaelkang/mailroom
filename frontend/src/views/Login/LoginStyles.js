import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  container: {
    // paddingRight: "300px"
  },
  loginContainer: {
    width: 400,
    height: 370,
    border: '1px solid lightgray',
    borderRadius: 5,
    margin: "200px auto 0",
    "& form": {
      marginTop: 25,
    },
    "& h1": {
      fontFamily: "Patrick Hand, Poppins, sans-serif",
      fontSize: "3.5rem",
      color: "#333"
    },
  },
  
  loginForm: {
    margin: '10px auto',
  },

  inputText: {
    fontFamily: "Lato, 'sans-serif",
    color: "#333"
  },
  
  registerContainer: {
    width: 400,
    height: 60,
    border: '1px solid lightgray',
    borderRadius: 5,
    margin: "15px auto 0",
  },
  
  loginBtn: {
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
  
  registerText: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 16,
    fontFamily: "Lato, sans-seriff",
    color: "#333"
  },
  
  signUp: {
    color: "#99DDCC",
    textDecoration: 'none'
  },

  logo: {
    width: 720,
    height: 480,
    border: "1px solid black",

  },
  footer: {
    margin: "10px auto"
  },

  logoImg: {
    height: '100%', 
    width: '48%',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "inline-block"
  },

  logoColumn: {
    "@media (max-width: 960px)": {
      display: "none"
    }
  }
});

export default loginStyles;