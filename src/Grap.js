import React from 'react';
import Line from "./Line"
import Bar from "./Bar"
import Ticks from "./Ticks"
import Hours from "./Hours"
import './index.css'


const Graph = ({
  averageWalkTime,
  business,
  walkCount,
  walksByHour,
  walkTime,
  utilization,
  
}) => {
 
  return (
    <div className ="flex">
    <div className ="flex-align">
      <div className="info">
        <h1>{business.name}</h1>
      </div>
      <div className="statsDash">
        <div className="statsCard">
          <p>Business ID:</p>
          <p style={{ fontSize: "1.7em" }}>{business.id}</p>
        </div>
        <div className="statsCard">
          <p> Dog Walker Utilization:</p>
          <p style={{ fontSize: "1.7em" }}>{`${utilization * 100}%`}</p>
        </div>
        <div className="statsCard">
          <p>Total Walk Time:</p>
          <p style={{ fontSize: "1.7em" }}>{`${walkTime} hours`}</p>
        </div>
        <div className="statsCard">
          <p>Average Walk Time:</p>
          <p style={{ fontSize: "1.7em" }}>{`${averageWalkTime} minutes`}</p>
        </div>
        <div className="statsCard">
          <p>Walk Count: </p>
          <p style={{ fontSize: "1.7em" }}>{walkCount}</p>
        </div>
       
      
      </div>
      <div className="info"> <p>Dogs walked by hour:</p></div>
      <div className="graph">
        <Ticks numberOfTicks={10} maxValue={128} />
        <div className="center">
          <div className="barContainer">
            <Line numberLines={10} maxValue={128} />
            {/* find maximum possible value of part count */}
            {/* defining a domain and a range to scale the values to our range of 1 - 128 */}
            {/* for every value in the dataset divide by maxium value to get percentage */}
            {walksByHour.map((walksByHour) => {
              const value = (walksByHour.count)
              const name = (walksByHour.count)
              return (
                // if the partsByHour value does not equal 0 display a bar
                value !== 0 ? (
                  <Bar
                    percent={(value) / 128 * 100}
                    key={walksByHour.count}
                    name={walksByHour.count}
                  />
                ) : (
                    // otherwise make the height and the name passed to the bar compoent 0/nothing so the zero values are not displayed 
                    <Bar
                      percent={0}
                      key={walksByHour.count}
                      name={''}
                    />
                  )
              )
            })
            }
          </div>
          <div className="timeContainer">
            {walksByHour.map((walksByHour) => {
              return (
                <Hours
                  key={walksByHour.time}
                  name={walksByHour.time}
                />
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Graph;