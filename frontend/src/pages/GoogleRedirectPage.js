import {useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";
import useStylesHook from "../hooks/useStyles";

export default function GoogleRedirectPage() {
    const query = new URLSearchParams(useLocation().search)
    const code = query.get("code")

    const {loginWithGoogleCode} = useContext(AuthContext);

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    useEffect(() => {
        loginWithGoogleCode(code)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[code])

    return(
        <div className={classes.loginLoadingPage}>
            <p>
                Logging in...
            </p>
            </div>
    )
}