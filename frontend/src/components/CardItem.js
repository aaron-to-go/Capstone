
export default function CardItem(card) {

    return (
        <div>
            <h2>{card.title}</h2>
            {/*<h3>State: {card.state}</h3>*/}
            <h3>Description: {card.description}</h3>
        </div>
    );
}
