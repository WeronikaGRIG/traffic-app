
import './Card.css';
import { cards } from './store.js'
import CardList from './CardList';

export default function Card() {
    return (

        <div className="cards">

            {cards.map((card, i) => {
                return (
                    <CardList
                        key={i} {...card}
                    />
                )
            })}


        </div>

    )
}
