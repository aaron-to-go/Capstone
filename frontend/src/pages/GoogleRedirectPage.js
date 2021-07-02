import {useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";

export default function GoogleRedirectPage() {
    const query = new URLSearchParams(useLocation().search)
    const code = query.get("code")

    const {loginWithGoogleCode} = useContext(AuthContext);

    useEffect(() => {
        loginWithGoogleCode(code)
    },[code])

    return(
        <p>
            Logging in with Google...
        </p>
    )
}