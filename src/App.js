import React from 'react'
import './App.css';
import Card from './components/Card/Card';
import { cards } from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      {cards.map((card, id) => {
        return (
          <Card key={id}
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
