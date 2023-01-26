
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

  
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const fetchPrice = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        setBitcoinPrice(response.data.bpi.USD.rate);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="card-container">
      <div className="card">
        {bitcoinPrice ? (
          <p>Aujourd'hui le BTC vaut ${bitcoinPrice}</p>
        ) : (
          <p>Loading...</p>
        )}
        <button className="button button-img" onClick={fetchPrice}>
          Hop!
        </button>
      </div>
    </div>
  );
}

export default App;