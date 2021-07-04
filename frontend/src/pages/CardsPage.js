import {useParams} from "react-router-dom";


export default function CardsPage(){

    const {user, repo} = useParams();
    const {cards} = useCards(user, repo);
    const {watchedPulls, addPullToWatchlist} = useWatchedPulls()

    return (
        <Wrapper>
            {cards.map((card) => (
                <PullItem title={card.title}
                          description={card.description}
                          addPullToWatchlist={addPullToWatchlist}
                />
            ))}

        </Wrapper>
    );
}