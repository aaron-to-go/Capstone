import {useHistory} from "react-router-dom";
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import useStylesHook from "../hooks/useStyles";

export default function NewCardButton() {

    const history = useHistory();
    const routeChange = () =>{
        history.push("/new");
    }

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    return (

        <Fab  color="primary" aria-label="add"
              className={classes.addButton}>
            <AddIcon onClick={routeChange}/>
        </Fab>
        );
    }
