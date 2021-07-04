import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import AuthContext from "./AuthContext";
import jwt_decode from "jwt-decode";

export default function AuthProvider({children}) {

    const [token, setToken] = useState()
    const history = useHistory()
    const [jwtDecoded, setJwtDecoded] = useState()

    const loginWithGoogleCode = code =>
        axios.post("/auth/google/login", {code})
            .then(response => response.data)
            .then(data => {
                setToken(data)
                setJwtDecoded(jwt_decode(data.toString()))
            })
            .then(() => history.push('/home'))
            .catch(error => console.error(error.message))

    return (
        <AuthContext.Provider value={{token, loginWithGoogleCode, jwtDecoded}}>
            {children}
        </AuthContext.Provider>
    )
}