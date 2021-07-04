import CardItem from "../components/CardItem";
import useCards from "../hooks/useCards";

export default function CardsPage(){

    const {cards} = useCards();

    return (
        <div>
            {cards.map((card) => (
                <CardItem title={card.title}
                    // state={card.state}
                          description={card.description}
                />
            ))}
        </div>
    );
}