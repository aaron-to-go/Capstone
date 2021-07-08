import {makeStyles} from "@material-ui/core";

export default function useStylesHook() {


    const useStyles = makeStyles((theme) => ({

        addButton: {
            color: "darkslategrey",
            position: "fixed",
            right: "15px",
            bottom: "15px",
            size: "large",
        },
        addCardForm:{
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
        },
        card: {
            backgroundColor: theme.palette.background.paper,
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            borderColor: "#fcdc5d",
        },
        cardContent: {
            flexGrow: 1,
            textOverflow:"ellipsis",
            overflow:"hidden",
        },
        cardDetails: {
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            borderColor: "#fcdc5d",
            maxWidth: "200px",
            marginTop: theme.spacing(10),
        },
        cardGrid: {
            backgroundColor: theme.palette.background.paper,
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        doneButton: {
            color: "darkslategrey",
            top: "10px"
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        googleButton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 0, 6),
            maxWidth: "md"
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        loginLoadingPage:{
            marginTop: theme.spacing(30),
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            justifyContent: "center"
        },
        loginPaper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
        },
        logo: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            color: "darkslategrey",
        },
        toolbar: {
            backgroundColor: "#fcdc5d",
            color: "darkslategrey",
        },
    }));

    return {useStyles};

}