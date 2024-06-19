import React, { useState } from 'react';

function CurrencyRow(props) {
  const [myValue, setMyValue] = useState('');
  const { name, currencyOptions } = props;
  const [selectedOptionKey, setSelectedOption] = useState('');

  const base = currencyOptions ? currencyOptions[0] : '';
  const rates = currencyOptions ? currencyOptions[1] : '';
  const options = currencyOptions ? currencyOptions.slice(2) : [];

  const handleInputChange = (e) => {
    setMyValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container p-4 bg-gray-300 rounded-md">
      <label htmlFor="from" className="block font-semibold mb-2">
        {name}
      </label>
      <input
        type='number'
        id='from'
        value={myValue}
        onChange={handleInputChange}
        className="border border-black rounded-md px-3 py-2 mb-2 w-full"
      />
      <select
        onChange={handleSelectChange}
        className="border border-black rounded-md px-3 py-2 w-full"
      >
        {options.map((cname) => (
          <option key={cname} value={cname}>{cname}</option>
        ))}
      </select>
      <br /><br />
      <h1 className="font-semibold">Selected Option: {selectedOptionKey}</h1>
      {rates && selectedOptionKey ? (
        <h1 className="font-semibold">{myValue * rates[selectedOptionKey]}</h1>
      ) : (
        <h1>0</h1>
      )}
    </div>
  );
};

export default CurrencyRow;
