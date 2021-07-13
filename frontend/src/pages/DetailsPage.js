import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import AuthContext from "../context/AuthContext";
import CardDetails from "../components/CardDetails";
import {Container} from "@material-ui/core";

export default function DetailsPage() {
    const { id } = useParams()
    const [card, setCard] = useState(null)
    const {token} = useContext(AuthContext)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .get(`/api/card/${id}`, config)
            .then((response) => response.data)
            .then(setCard)
            .catch((error) => console.error(error.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (<Container>
                {card &&
                <CardDetails title={card.title}
                          description={card.description}
                          id={card.id}
                          department={card.department}
                          datetime={card.datetime}
                />}
            </Container>)
}