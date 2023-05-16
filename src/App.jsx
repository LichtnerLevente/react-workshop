// use nextId() to generate a new unique ID when needed
import nextId from "./generateId";
import Dice from './components/Dice';
import DiceRoller from './components/DiceRoller.js';
import React, { useState, useEffect } from 'react';
import DiceHistory from "./components/DiceHistory";

function App() {
  const [die, setDie] = useState(null)
  const [history, setHistory] = useState([])
  const [id, setID] = useState(0)


  function handleRoll(rnd) {
    setDie(rnd)
    setHistory([...history, {
      roll: rnd,
      id: id,
      isSelected: false
    }])
    setID(id + 1)
  }

  function handleSelect(id){
    const newHistory = [...history]
    newHistory.forEach((e) => {
      if(id === e.id){
        e.isSelected = !e.isSelected;
      }
    })
    setHistory(newHistory)
  }
  function handleRemove(id){
    const newHistory = []
    history.forEach((e) => {
      if (id !== e.id){
        newHistory.push(e);
      }
    });
    setHistory(newHistory)
  }

  return (
    <>
      <DiceRoller onRoll={handleRoll} />
      <Dice num={die} />
      {history.length > 0 ?
        <DiceHistory
          history={history}
          onSelect={handleSelect}
          onRemove={handleRemove}
        />
        : <p>No dice rolls yet.</p>
      }
    </>
  );
}

export default App;
