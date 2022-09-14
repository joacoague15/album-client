
const navBar ={
    display:"flex", 
    flexDirection:"column", 
    width: "100%", 
    textAlign:"center", 
    bgcolor: "#010747", 
    borderRadius: "0 0 15px 15px"
}

const paperStyleOutside = {
    cursor: "pointer",
    display: "block",
    width: "120px",
    height: "185px",
    bgcolor: "#D9D9D9",
    "&:hover": {
        transform: "rotate(1deg)"
    }
}

const paperStyleInside = {
    display: "block",
    top: 12,
    position: "relative",
    margin: "auto",
    width: "100px",
    height: "160px ",
    bgcolor: "#8E8D8D"
}

const albumBackground = {
    position: "absolute", 
    top: 120, 
    bottom: "auto", 
    left: 30, 
    right: 30, 
    bgcolor: "#010747", 
    height: "auto", 
    borderRadius: "15px", 
    alignContent: "center"
}

const flexFigurines ={
    display: "flex", 
    flexWrap: "wrap", 
    gap: "2rem", 
    justifyContent: "center", 
    padding:"30px 100px" 

}

export { paperStyleOutside, paperStyleInside, albumBackground, flexFigurines, navBar  }