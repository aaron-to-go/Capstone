import {makeStyles} from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";

export default function useStylesHook() {


    const useStyles = makeStyles((theme) => ({

        toolbar: {
          backgroundColor: yellow[500],
          color: "darkslategrey",
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1, 0, 6),
            maxWidth: "md"
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        card: {
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContent: {
            flexGrow: 1,
            textOverflow:"ellipsis",
            overflow:"hidden",
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        addButton: {
            color: "darkslategrey",
            position: "fixed",
            right: "15px",
            bottom: "15px",
            size: "large",
        },
        doneButton: {
            color: "darkslategrey",
            top: "10px"

        },
        loginPaper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
        },
        logo: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        googleButton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        addCardForm:{
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            color: "darkslategrey",
        },
    }));

    return {useStyles};

}