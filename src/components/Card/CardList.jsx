

export default function CardList({ title, price, info, desc, backgroundColor, background, active }) {

    return (
        <div className="card" style={{ width: active ? '340px' : '350px', height: active ? '500px' : '450px', }}>
            <div className="card__top" style={{ backgroundColor }}>
                <h3 className="card__title" style={{ background }}>{title}</h3>
                <div className="card__price"><span> руб </span><strong>{price}</strong>  /мес</div>
            </div>

            <div className="card_boton">
                <div className="card__info">{info}</div>
                <div className="card__desc">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
