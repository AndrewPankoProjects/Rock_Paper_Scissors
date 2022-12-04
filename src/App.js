import './App.css';
import React, { useState } from "react";

export default function App() {
  let player = '';
  let computer = '';
  const [result, setResult] = useState([]);

  const check_win = (players_choice) => {
    player = players_choice;
    computer = computer_choice();
    console.log(`You chose ${player}, Computer chose ${computer}`);
    // In case both players pick the same choice
    if (player === computer)
      return "It's a tie! You matched the Almighty Computer!"
    
    // All outcomes when player picks Rock
    else if (player === "Rock")
      if (computer === "Sissors")
        return "Rock smashes Scissors! You win!"
      else
        return "Paper covers Rock! You lose.."
    
        // All outcomes when player pick Paper
    else if (player === "Paper")
      if (computer === "Sissors")
        return "Scissors cuts Paper! You lose.."
      else
        return "Paper covers Rock! You win!"
    
        // All outcomes when player pick Scissors
    else if (player === "Scissors")
      if (computer === "Paper")
        return "Scissors cuts Paper! You Win!"
      else
        return "Rock smashes Scissors! You lose!"
  }  

  const computer_choice = () => {
    const computer = Math.floor(Math.random() * 3);
    
    if (computer === 0)
      return 'Rock';
    else if (computer === 1)
      return 'Paper';
    else 
      return 'Scissors';
  }
  
  return (
    <section>
      <h1>Welcome to Rock Paper Scissors</h1>
      <h3>You have been challenged by the 200 IQ God of Rock Paper Scissors! THE COMPUTER..!</h3>

      <h1>You must pick your weapon</h1>
      
      <button className='rock' onClick={() => setResult(check_win('Rock'))}></button>
      <button className='paper' onClick={() => setResult(check_win('Paper'))}></button>
      <button className='scissors' onClick={() => setResult(check_win('Scissors'))}></button>

      <h1>{result}</h1>

    </section>
  );
}
