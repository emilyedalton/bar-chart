import React from 'react';
import './index.css'

const TextInfo = () => {
    const markerArr = Array(10).fill(null);

    return (
        <div className="bar-text-content">
          {
            markerArr.map((el, i) => (
             <p className="ticks" style={{ top: `${i * 10}%` }}>
              { i * 10 }
             </p>
            ))
          }
        </div>
      )
    }
    

  

// const TextInfo = (number) => {
 
//     return (
// <div className ="bar-text-content"
// style ={{height: `${number}%`}} >
// <h5>{number}</h5>

// </div>
//     );
// };

export default TextInfo;