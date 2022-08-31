import {useState} from 'react';
import './App.css';

function App() {
  const [dollars, setDollars] =  useState('');
  const [coins, setCoins] = useState({
    penny:0,
    nickel:0,
    dime:0,
    quarter:0,
  })
  const [converted, setConverted] = useState(false);

  const formatDollarsToCents = function(value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    if (value && value.includes('.')) {
      value = value.substring(0, value.indexOf('.') + 3);
    }
  
    return value ? Math.round(parseFloat(value) * 100) : 0;
  }

  const handleChange= (event) => {
    setDollars(event.target.value);
  }


  const convertDollars= (event) =>{
    event.preventDefault();
    let cents = formatDollarsToCents(dollars)
    const centsTotal = {
      penny:0,
      nickel:0,
      dime:0,
      quarter:0,
    }
    while (cents > 0){
      if (cents > 25){
        centsTotal.quarter++;
        cents = cents - 25;
      }else if (cents > 10){
        centsTotal.dime++;
        cents = cents - 10;
      }else if (cents > 5){
        centsTotal.nickel++;
        cents = cents - 5;
      }else{
        centsTotal.penny++;
        cents = cents -1;
      }
    }
    setCoins(centsTotal);
    setConverted(true);
  }
  return (
    <div className="App">
      <h1>Dollars-2-Cents</h1>
      <h2>Converting dollars to cents would enable you to practice your fundamental knowledge of programming.
         Loops, if conditions and a simple algorithm will be used. Your task is to let the user input a dollar value (float), assuming that it can also accept extra cents (ex. $2.75), and convert it into an integer (in this case, if $2.75 = 275). After this, convert into coins with the sub-type of dollars: penny, nickel, dime and quarter. Use an algorithm that would divide the dollar value to the four coin types, and output few coins as possible.
         </h2>
      <h3>Put the amount of money you have in this input and it will tell you how many Pennies, Nickels, Dimes and Quarters you have</h3>
      <input type='number' name='dollars' value={dollars} onChange={handleChange} placeholder='x.xx'></input>
      <button onClick={convertDollars}>Convert</button>
      {
        converted === true?
        <h2>You have: {coins.quarter} quarters, {coins.dime} dimes, {coins.nickel} nickels, and {coins.penny} pennies</h2>
        :
        <h2>bruh</h2>
      }
    </div>
  );
}

export default App;
