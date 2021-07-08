import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function CardItem(card) {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

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
                <Button size="small" color="secondary" component={Link} to={`/card/${card.id}`}>
                    Details
                </Button>
            </CardActions>

        </Card>
    );
}
