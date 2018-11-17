import React from 'react';


const Scrolls = (props) => {
    return(
        <div style={{overflowY: 'scroll' , border: '.5px black solid', height:'560px'}}>
            {props.children}
        </div>
    );
};

export default Scrolls; 