import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Grap'

const data = {
  averageWalkTime: 12, // in minutes
  business: {
    id: 29012,
    name: '🐩 Walk-a-dog 🐩'
  },
  walkCount: 1002, // count value
  walksByHour: [
    { time: '01:00 AM', count: 91 },
    { time: '02:00 AM', count: 78 },
    { time: '03:00 AM', count: 58 },
    { time: '04:00 AM', count: 0 },
    { time: '05:00 AM', count: 0 },
    { time: '06:00 AM', count: 89 },
    { time: '07:00 AM', count: 93 },
    { time: '08:00 AM', count: 104 },
    { time: '09:00 AM', count: 74 },
    { time: '10:00 AM', count: 68 },
    { time: '11:00 AM', count: 88 },
    { time: '12:00 PM', count: 43 },
    { time: '01:00 PM', count: 67 },
    { time: '02:00 PM', count: 128 },
    { time: '03:00 PM', count: 21 },
  ],
  walkTime: 12.43, // in hours
  utilization: .869, // % out of 1.0
}

function App() {
  return (
    <div className="App">
 <Graph
averageWalkTime={data.averageWalkTime}
business={data.business}
walkCount={data.walkCount}
walksByHour={data.walksByHour}
walkTime={data.walkTime}
utilization={data.utilization} />
    </div>
  );
}

export default App;
