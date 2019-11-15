import React, {Component} from 'react';
import Line from "./Line"
import TextInfo from './TextInfo'
import Bar from './Bar'
import './index.css'


const lines = [90, 80, 70, 60, 50, 40, 30, 20, 10]
class Graph extends Component{
 

// state = {

//     }
    // renderBars() {
    // const { currencies } = this.currencies;
        
horozontalLines(){
return lines.map((el, i)=>(
<Line 
top ={el}
key={i}
/>
))
    }
render (){
return (
<div className ="graph-wrapper">

<div className= "graph">
<TextInfo/>
<div className ="bar-lines-container">
 {this.horozontalLines()}  
 {/* <Line top = {90}/>
<Line top = {80}/>
<Line top = {70}/>
 <Line top = {60}/>
<Line top = {50}/>
 <Line top = {40}/> 
 <Line top = {30}/> 
<Line top = {20}/>   */}

{/* find maximum possible value of parts  */}
{/* defining a domain and a range for a scale scaling all of the values to our range of 1 - 128 */}
{/* for every value in the dataset divide by maxium value to get percentage */}
 {this.props.currencies.map((currency) => {
          const value = (currency.marketCap ) 
          const name = (currency.currencyName) 
          return (
            <Bar 
              percent={(value)/128 * 100}
              key={currency.currencyName}
              name={currency.currencyName}
            />
          )
        })
      }
 </div>
</div>
</div>

    );
}
};


export default Graph;