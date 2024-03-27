
import styles from './Card.module.css';
import { cards } from './data.js'
import CardList from './CardList';

export default function Card() {
    return (

        <div className={styles.cards}>

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
