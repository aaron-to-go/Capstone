import {useEffect} from "react";
import axios from "axios";


export default function LoginPage() {

    const [config, setConfig] = useState();

    useEffect(() => {
        axios.get("/auth/google/login")
            .then(response => response.data)
            .then(setConfig)
    }, [])

    const parameter = {
        scope:"https%3A//www.googleapis.com/auth/userinfo.profile",
        access_type:"offline",
        include_granted_scopes:"true",
        response_type:"code",
        state:"state_parameter_passthrough_value",
        redirect_uri:config,
        client_id:"41125772544-es4ec32mlpq30rq3i8r8q5q8b3b25r7e.apps.googleusercontent.com"
    }

    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${parameter.scope}&access_typ=${parameter.access_type}&include_granted_scopes=${parameter.include_granted_scopes}&response_type=${parameter.response_type}&state=${parameter.state}&redirect_uri=${parameter.redirect_uri}&client_id=${parameter.client_id}`



    return(
        <a href={url}>
            <button>
                Login
            </button>
        </a>
    )
}