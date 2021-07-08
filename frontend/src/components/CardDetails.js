import useStylesHook from "../hooks/useStyles";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";

export default function CardDetails(card) {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    return (
        <Card className={classes.cardDetails} variant="outlined">
            <CardMedia
                title={card.title}/>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography >
                    {card.description}
                </Typography>
                <Typography>
                    {card.department}
                </Typography>
                <Typography>
                    {card.datetime}
                </Typography>
            </CardContent>
        </Card>
    );
}