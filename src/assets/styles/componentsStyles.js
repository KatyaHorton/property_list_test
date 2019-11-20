export const styles = {
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
    width: "230px",
    height: "90px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 4px -2px #999",
    padding: "10px",
    margin: "0 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },

  propertySectionLarge: {
    width: "40vw",
    width: "400px",
    margin: "0 10px 10px 0",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 4px -2px #999"
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
    padding: "10px",
    height: "auto",
    width: "250px",
    backgroundColor: "white",
    zIndex: 11
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
    padding: 0
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
    position: "relative",
    top: "50px"
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
      backgroundColor: "red"
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
};
