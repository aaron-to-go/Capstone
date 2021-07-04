import axios from "axios";
import {useEffect} from "react";


export default function useWatchedPulls() {

    const [cards, setCards] = useState([]);
    // const {token} = useContext(AuthContext)


    useEffect(() => {
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // }
        axios
            .get(`/api/pulls/watched`, /*config*/)
            .then((response) => response.data)
            .then(setCards)
            .catch((error) => console.error(error.message));
    }, [/*token*/]);

    return cards;
}
