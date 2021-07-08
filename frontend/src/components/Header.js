import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStylesHook from "../hooks/useStyles";
import {useHistory} from "react-router-dom";

export default function Header() {

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    const history = useHistory();
    const routeChange = () =>{
        let path = `/home`;
        history.push(path);
    }

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="home" className={classes.menuButton} color="inherit" aria-label="menu" onClick={routeChange}>
                    <MenuIcon />
                    Home
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}