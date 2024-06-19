import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';

function App() {
  const Base_Url = "https://api.exchangerate-api.com/v4/latest/INR";
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(Base_Url)
      .then(res => res.json())
      .then(jsonData => {
        setCurrencyOptions([jsonData.base, jsonData.rates, ...Object.keys(jsonData.rates)]);
        console.log(jsonData);
      })
      .catch(error => console.log("Something went wrong:", error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen flex items-center justify-center">
      <div className="bg-white m-12 p-6 border-2 border-black rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">Currency Converter</h1>
        <CurrencyRow name="INDIA amount" currencyOptions={currencyOptions} />
      </div>
    </div>
  );
}

export default App;
