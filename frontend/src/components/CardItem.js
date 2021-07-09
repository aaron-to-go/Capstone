import useStylesHook from "../hooks/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
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

    // useEffect(() => {
    //     console.log("Use Effect triggered")
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     }
    //     axios
    //         .get(`/api/cards/${card.id}`, config)
    //         .then((response) => response.data)
    //         .then(setVotes)
    //         .catch((error) => console.error(error.message));
    // },[token]);
    console.log(like)

    function handleClick(event) {
        event.preventDefault()
        console.log("hook triggered")
        console.log(like)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .put(`/api/cards/${card.id}`,{} ,config)
            .then((response) => response.data)
            .catch((error) => console.error(error.message));
        console.log("put success")
        axios
            .get(`/api/cards/${card.id}`, config)
            .then((response) => {
                setLike(response.data.likeStatus)
                setVotes(response.data.votes)
            })
            .catch((error) => console.error(error.message));
        console.log("get success")
        console.log(like)
        console.log(votes)
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
                <Button size="small" color="secondary">
                    Details
                </Button>
                <Button size="small" color={like === false ? "secondary" : '#fafafa'} onClick={handleClick}>
                    {votes.length} Like(s)
                </Button>
            </CardActions>

        </Card>
    );
}
