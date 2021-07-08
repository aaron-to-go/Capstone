import {useEffect, useState} from "react";
import axios from "axios";
import {Container, CssBaseline} from "@material-ui/core";
import useStylesHook from "../hooks/useStyles";

export default function LoginPage() {

    const [config, setConfig] = useState();
    const {useStyles} = useStylesHook();
    const classes = useStyles()

    useEffect(() => {
        axios.get("/auth/google/login")
            .then(response => response.data)
            .then(setConfig)
    }, [])

    const parameter = {
        scope: "https%3A//www.googleapis.com/auth/userinfo.profile",
        access_type: "offline",
        include_granted_scopes: "true",
        response_type: "code",
        state: "state_parameter_passthrough_value"
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.loginPaper}>
                <img className={classes.logo} src={process.env.PUBLIC_URL + "/insighter_logo.png"} alt="Logo" />
                {config &&
                <a className={classes.googleButton} href={`https://accounts.google.com/o/oauth2/v2/auth?scope=${parameter.scope}&access_typ=${parameter.access_type}&include_granted_scopes=${parameter.include_granted_scopes}&response_type=${parameter.response_type}&state=${parameter.state}&redirect_uri=${config.redirect_uri}&client_id=${config.client_id}`}>
                    <img src={process.env.PUBLIC_URL + "/btn_google_signin_light_normal_web.png"} alt="Google Sign In" />
                </a>
            }
            </div>
        </Container>
    )
}