import { makeStyles } from "@material-ui/core";

const mailroomStyles = makeStyles({
  styledTable: {
    borderCollapse: "collapse",
    margin: "25px auto",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
    fontSize: "0.9em",
    borderRadius: "5px",
    border: "1px solid #dddddd",
    width: "70%",
    "& th, & td": {
      padding: "12px 15px"
    },
    "& tbody": {
      "& tr": {
        border: "1px solid #dddddd",
        "& td": {
          border: "1px solid #dddddd",
          color: "#333"
        },
        "&:nth-of-type(even)": {
          background: "rgb(186, 215, 223)",
        },
      }, 
    }
  },
  hide: {
    display: "none"
  },
  tableHead: {
    backgroundColor: "rgb(186, 215, 223)",
    color: "#333",
    textAlign: "center"
  },
  tableCell: {
    padding: "12px 15px"
  },
  updateBtn: {
    backgroundColor: "#99DDCC",
    margin: "5px",
    color: "#333",
    "&:hover": {
      backgroundColor: "#88ccbb"
    }
  },
  deleteBtn: {
    backgroundColor: "#FFE2E2",
    margin: "5px",
    color: "#333",
    "&:hover": {
      backgroundColor: "#eed1d1"
    }
  },
  addBtn: {
    backgroundColor: "#99DDCC",
    color: "#333",
    "&:hover": {
      backgroundColor: "#88ccbb"
    }
  },
  addContainer: {
    margin: "30px"
  }
});

export default mailroomStyles;