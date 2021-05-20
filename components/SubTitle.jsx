import React from 'react';
const style = {
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
//Home Page Titles
function SubTitle(props){
    return(
        <div>
            <div style={style}>{props.text}</div>
            <hr style={hr}/>
        </div>
    )
}
export default SubTitle;