import axios from "axios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";

export default function useCards() {

    const [cards, setCards] = useState([]);
    const {token} = useContext(AuthContext)


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .get(`/api/cards`,config)
            .then((response) => response.data)
            .then(setCards)
            .catch((error) => console.error(error.message));
    }, [token]);

    return {cards};
}
