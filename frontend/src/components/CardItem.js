import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

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
                <Button size="small" color="secondary">
                    Details
                </Button>
            </CardActions>

        </Card>
    );
}
