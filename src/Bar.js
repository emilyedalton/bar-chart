import React from 'react';
import './index.css'



const Bar = ({percent, name}) => {
 
    return (
<div className ="bars" 
style ={{height: `${percent}%`}} >
<h5>{name}{percent}</h5>

</div>
    );
};

export default Bar;