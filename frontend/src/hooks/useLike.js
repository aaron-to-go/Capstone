import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

export default function useLike(initialState, card) {

    // const [like, setLike] = useState(initialState);
    // const {token} = useContext(AuthContext);


    //
    // function handleClick(event) {
    //     event.preventDefault()
    //     console.log("hook triggered")
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     }
    //     axios
    //         .put(`/api/cards/${card.id}`,{} ,config)
    //         .then((response) => response.data)
    //         .then(setLike)
    //         .catch((error) => console.error(error.message));
    // }

    // return {like, handleClick};
}