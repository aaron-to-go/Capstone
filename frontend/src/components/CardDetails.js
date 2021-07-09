import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardContent, CardMedia, Container, Typography} from "@material-ui/core";
import Moment from "react-moment";
import {useHistory} from "react-router-dom";
import React from "react";

export default function CardDetails(card) {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    const history = useHistory();
    const routeChange = () =>{
        let path = `/home`;
        history.push(path);
    }

    return (<Container component="main" maxWidth="xs">
        <Card className={classes.cardDetails} variant="outlined">
            <CardMedia
                title={card.title}/>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography>
                    {card.description}
                </Typography>
                <div className={classes.line}>

                </div>
                <Typography className={classes.detailsText}>
                    Department: {card.department}
                </Typography>
                <Typography className={classes.detailsText}>
                    Created: {" "}
                    <Moment format="DD.MM.YYYY">
                        {card.datetime}
                    </Moment>
                </Typography>
            </CardContent>
        </Card>
        <Button variant="contained" color="primary" className={classes.doneButton} onClick={routeChange}>
            Back
        </Button>
        </Container>
    );
}