import {Button, makeStyles} from "@material-ui/core";
import React from "react";

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
            margin: "0 auto",
            borderColor: "#fcdc5d",
            maxWidth: "400px",
            width: "100%",
            marginTop: theme.spacing(10),
        },
        cardGrid: {
            backgroundColor: theme.palette.background.paper,
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        detailsText:{
            marginTop: "15px",
            fontSize: "0.85em",
            color: "slategrey"
        },
        doneButton: {
            color: "darkslategrey",
            top: "20px",
            width: "100%"
        },
        filter:{
            size: "small",
            display: "flex",
            flexDirection: "row-reverse",
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
        line:{
            height: "1px",
            width: "100%",
            backgroundColor: "#fcdc5d",
            marginTop: "15px",
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