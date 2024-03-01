
import './Card.css';

// const cardTop = {
//     backgroundColor: "var(--blue-dark)",
// }

export default function Cards(props) {
    return (
        <div className="card">
            <div className="card__top">
                <h3 className="card__title">{props.title}</h3>
                <div className="card__price"><span> руб </span><strong>{props.price}</strong>  /мес</div>
            </div>

            <div className="card_boton">
                <div className="card__info">{props.info}</div>
                <div className="card__desc">
                    <p>{props.desc}</p>
                </div>
            </div>




        </div>

    )
}
