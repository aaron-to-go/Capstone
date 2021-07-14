import CardItem from "../components/CardItem";
import useCards from "../hooks/useCards";
import {Button, Container, Grid} from "@material-ui/core";
import useStylesHook from "../hooks/useStyles";
import NewCardButton from "../components/NewCardButton";
import React from "react";

export default function CardsPage(){

    const {cards} = useCards();
    const {useStyles} = useStylesHook();
    const classes = useStyles()

    return (
        <div className={classes.heroContent}>

            <Container className={classes.cardGrid} maxWidth="md">
                <div className={classes.filter}>
                    <Button color="secondary">Filter</Button>
                    <Button color="secondary">Sort</Button>
                </div>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <CardItem title={card.title}
                            description={card.description}
                            id={card.id}
                            votes={card.votes}
                        />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <NewCardButton/>
        </div>
    );
}