import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import useLike from "../hooks/useLike";

export default function CardItem(card) {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    const initialState = card.votes.includes(card.id);
    const {like, handleClick} = useLike(initialState, card)

    return (
        <Card className={classes.card} variant="outlined">
            <CardMedia
                title={card.title}/>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography>
                    {card.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="secondary">
                    Details
                </Button>
                {like === false &&
                <Button size="small" color="orange" onClick={handleClick}>
                    {card.votes.length} Like(s)
                </Button>}
                {like === true &&
                <Button size="small" color="grey" onClick={handleClick}>
                    {card.votes.length} Like(s)
                </Button>}

            </CardActions>

        </Card>
    );
}
