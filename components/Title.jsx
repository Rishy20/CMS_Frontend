import React from 'react';
const style = {
    fontSize:26,
    fontWeight: 600,
    color: "#585858cf",
    textTransform: "uppercase"
}
//Admin Page Titles
function Title(props){
    return(
        <div className='title' style={style}>
            {props.text}
        </div>
    )
}
export default Title;