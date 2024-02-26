import React from 'react'
import './App.css';
import Cards from './components/Cards/Cards';
import { cards } from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      {cards.map((card, id) => {
        return (
          <Cards key={id}
            title={card.title}
            price={card.price}
            info={card.info}
            desc={card.desc}
          />
        )
      })}
    </div>
  );
}

export default App;
