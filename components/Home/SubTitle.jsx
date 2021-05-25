import React from 'react';
const black = {
    fontSize:26,
    fontWeight: 600,
    color: "black",
    textTransform: "uppercase"
}
const hr={
    width: 50,
    marginLeft: "auto",
    marginRight: "auto",
    height: 5,
    backgroundColor: "var(--gold)",
    border: "none"
}
const white={
    fontSize:26,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "white"
}
//Home Page Titles
function SubTitle(props){
    return(
        <div>
            <div style={props.white?white:black}>{props.text}</div>
            <hr style={hr}/>
        </div>
    )
}
export default SubTitle;