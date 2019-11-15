import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Grap'

const data = {
  currencies: [
  {
    currencyName: 'Bitcoin',
    marketCap: 50
  },
  {
    currencyName: 'Ethereum',
    marketCap: 25
  },
  {
    currencyName: 'XRP',
    marketCap: 10
  },
  {
    currencyName: 'Bitcoin Cash',
    marketCap: 0
  },
  {
    currencyName: 'EOS',
    marketCap: 40
  },
  {
    currencyName: 'Stellar',
    marketCap: 105
  }
]}
function App() {
  return (
    <div className="App">
 <Graph
 currencies={data.currencies}
 />
    </div>
  );
}

export default App;
