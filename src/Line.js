import React from 'react';



const Line = ({numberLines, maxValue}) => {
 function generateLines(nLines, vMax){
// collections of lines on the x axis of the graph
    const lines = []

// populate the line collection
for (let i =0; i <= nLines; i++){
    const lineVal = (vMax/nLines * i);

    lines[i] ={
        value: Math.floor(lineVal), // the maximum value of the graph lines derived  from the dataset's maximum value
        percent: Math.floor(lineVal/vMax * 100)//percentage of that value

}
}
//return the array
return lines;
 };

 return(
     <div>

         {
             generateLines(numberLines, maxValue).map((line,i)=>(
                <div className ="line"
                key={i}
                style ={{
                    position: 'absolute',
                    bottom: `${line.percent}%`,
                    transform: "translateY(50%)",//moving the element down by half its height to center
                }}>
                </div>
             ))
            }
            </div>
            )
        };
        export default Line


