import React from 'react';
import './index.css'



const Bar = ({percent, name}) => {
 
    return (
<div className ="bars" 
style ={{height: `${percent}%`}} >
<h5>{name}</h5>

</div>
    );
};

export default Bar;