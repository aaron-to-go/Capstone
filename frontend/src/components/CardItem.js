import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import useLike from "../hooks/useLike";
import {useContext, useEffect, useState} from "react";
import {grey} from "@material-ui/core/colors";
import AuthContext from "../context/AuthContext";
import axios from "axios";

export default function CardItem(card) {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    const [like, setLike] = useState(card.votes.includes(card.id));
    const [votes, setVotes] = useState(card.votes);
    const {token} = useContext(AuthContext);

    function handleClick(event) {
        event.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .put(`/api/cards/${card.id}`,{} ,config)
            .then((response) => response.data)
            .catch((error) => console.error(error.message));
        axios
            .get(`/api/cards/${card.id}`, config)
            .then((response) => {
                setLike(response.data.likeStatus)
                setVotes(response.data.votes)
            })
            .catch((error) => console.error(error.message));
    }

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
                <Button size="small" color={like === false ? "secondary" : '#fafafa'} onClick={handleClick}>
                    {votes.length} Like(s)
                </Button>
            </CardActions>

        </Card>
    );
}
