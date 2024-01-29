import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [drinkInput, setDrinkInput] = useState('');
  const [apiData, setApiData] = useState(null);

  const handleInputChange = (event) => {
    setDrinkInput(event.target.value);
  };

  useEffect(() => {
    if (drinkInput.trim() !== '') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
        .then((response) => response.json())
         
        .then((data) => setApiData(data.drinks[0].strDrink));
    }
  }, [drinkInput]);

  return (
    <>
      
      <div className="search-container">
        <label>
          Search for a cocktail:
          <input type="text" value={drinkInput} onChange={handleInputChange} />
        </label>
      </div>

      <h2>API Data:</h2>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Enter a cocktail name to search for API data.</p>
      )}
    </>
  );
}

export default App;
