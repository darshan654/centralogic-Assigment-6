// App.js
import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css'

function App() {
  const Base_Url = "https://api.exchangerate-api.com/v4/latest/INR";
  const [currencyOptions, setCurrencyOptions] = useState([]);



  useEffect(() => {
    fetch(Base_Url)
      .then(res => res.json())
      .then(jsonData => {
        setCurrencyOptions([jsonData.base, jsonData.rates, ...Object.keys(jsonData.rates),]);


        console.log(jsonData);
      })
      .catch(error => console.log("Something went wrong:", error));
  }, []);

  return (
    <div style={{ backgroundColor: "white", margin: "50px", border: "3px solid black ", padding: "10px", borderRadius: "14px" }}>

      <h1 style={{ fontSize: "50px" }}> Currency Converter</h1>
      <CurrencyRow name="To" currencyOptions={currencyOptions} />
    </div>

  );
}

export default App;