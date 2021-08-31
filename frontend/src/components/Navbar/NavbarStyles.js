import { makeStyles } from "@material-ui/core";

const navbarStyles = makeStyles({
  navbar: {
    backgroundColor: "#BAD7DF"
  },
  navbarLogo: {
    fontFamily: "Poppins, sans-seriff",
    color: "#333",
    "& a": {
      textDecoration: "none",
      color: "#333"
    }
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    marginRight: 50,
    color: "#333",
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,

    "& p": {
      paddingTop: 5,
      marginRight: 15
    }
  },
  btn: {
    color: "#333",
  },
  link: {
    textDecoration: "none"
  }
});

export default navbarStyles;