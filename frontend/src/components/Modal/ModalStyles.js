import { makeStyles } from "@material-ui/core";

const modalStyle = makeStyles({
  modal: {
    backgroundColor: "#BAD7DF",
    position: "absolute",
    width: "400px",
    height: "250px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    textAlign: "center",
    padding: "30px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)"
  },
  container: {
    fontFamily: "Lato, sans-seriff"
  },
  modalBtn: {
    width: 225,
    height: '100%',
    marginTop: 20,
    backgroundColor: "#99DDCC",
    color: "#333",
    fontFamily: "Lato, sans-seriff",
    "&:hover": {
      backgroundColor: "#88ccbb"
    }
  }
});

export default modalStyle;