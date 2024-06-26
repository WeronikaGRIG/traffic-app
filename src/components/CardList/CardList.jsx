
import { useState } from 'react'
import styles from './CardList.module.css'

export default function CardList({ title, price, info, desc, backgroundColor, background }) {

    const [isHovering, setHovering] = useState(false)

    const handleClick = () => {
        setHovering(!isHovering);
    };


    return (
        <div className={isHovering ? styles.card : styles.card__active}
            onClick={handleClick}
        >
            <div className={styles.card__top} style={{ backgroundColor }}>
                <h3 className={styles.card__title} style={{ background }}>{title}</h3>
                <div className={styles.card__price}><span> руб </span><strong>{price}</strong>  /мес</div>
            </div>

            <div className={styles.card_boton}>
                <div className={styles.card__info}>{info}</div>
                <div className={styles.card__desc}>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
