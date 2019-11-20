import { makeStyles } from "@material-ui/core";

export const styles = makeStyles(() => ({
  closeButton: {
    border: "1px solid #999",
    backgroundColor: "transparent",
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    display: "flex",
    alighItems: "center",
    justifyContent: "center"
  },

  containerSmall: {
    width: "130px",
    height: "90px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 4px -2px #999",
    padding: "10px",
    margin: "0 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "@media screen and (min-width: 412px)": {
      width: "250px"
    }
  },

  propertySectionLarge: {
    width: "100%",
    minWidth: "300px",
    margin: "0 10px 10px 0",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 4px -2px #999",
    "@media screen and (min-width: 412px)": {
      padding: "10px",
      height: "auto",
      maxWidth: "500px",
      width: "97%"
    }
  },

  rowCntereSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  columnCntereSpaceBetween: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  sidebarRight: {
    position: "fixed",
    right: 0,
    top: 0,
    padding: "10px 3px",
    height: "auto",
    width: "130px",
    backgroundColor: "white",
    zIndex: 11,

    "@media screen and (min-width: 412px)": {
      padding: "10px",
      height: "auto",
      width: "250px"
    }
  },
  lightColorText: {
    margin: 0,
    padding: 0,
    color: "#00B0A8"
  },
  blackText: {
    margin: 0,
    padding: 0,
    color: "black"
  },
  lightText: {
    margin: 0,
    padding: 0,
    color: "#999"
  },

  favButton: {
    color: "#00B0A8",
    border: "1px solid #00B0A8",
    height: "40px",
    width: "100%",
    margin: 0,
    padding: "0 15px"
  },
  numberCounter: {
    borderRadius: "50%",
    backgroundColor: "red",
    width: "20px",
    height: "20px",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginLeft: "15px"
  },
  largeImgContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    margin: 0,
    padding: 0
  },
  largeImg: {
    width: "100%",
    margin: 0,
    padding: 0
  },
  smallImgContainer: {
    width: "60px",
    height: "60px",
    overflow: "hidden",
    borderRadius: "50%",
    margin: 0,
    padding: 0,
    display: "none",
    "@media screen and (min-width: 412px)": {
      display: "block"
    }
  },
  smallImg: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0
  },
  ulProperties: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    top: "50px",
    margin: "5px",
    padding: "5px"
  },
  liProperties: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  favHeartButton: {
    backgroundColor: "#f9f9f9",
    border: "none",
    "&:focus": {
      border: "1px solid red"
    }
  },
  favButtonText: {
    display: "none",
    "@media screen and (min-width: 412px)": {
      display: "block"
    }
  },
  attentionText: {
    color: "#085963",
    margin: 0,
    padding: 0,
    cursor: "pointer"
  },
  mainHeader: {
    position: "fixed",
    top: "0",
    padding: "15px",
    backgroundColor: "white",
    width: "100%",
    height: "40px",
    zIndex: 10
  }
}));
