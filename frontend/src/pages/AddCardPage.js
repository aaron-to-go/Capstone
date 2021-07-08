import axios from 'axios';
import React, {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import {Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import useStylesHook from "../hooks/useStyles";


export default function AddCardPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");

    const {token} = useContext(AuthContext);

    const history = useHistory()

    const {useStyles} = useStylesHook();
    const classes = useStyles()

    const handleSubmit = (event => {
        event.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .post(`/api/cards`,{
                "title": title,
                "description": description,
                "department":department}, config)
            .then(() => {
            history.push('/home')})
            .catch((error) => {
            console.log(error)
        })
            .catch()
    })

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
                <form className={classes.addCardForm} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Title"
                            name="title"
                            autoFocus
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={5}
                            label="Description"
                            name="description"
                            autoFocus
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="department select">
                            Department
                        </InputLabel>
                        <Select
                            name="department-select"
                            labelId="department select"
                            id="department-select"
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            displayEmpty
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="SALES">Sales</MenuItem>
                            <MenuItem value="HR">HR</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className={classes.doneButton} variant="contained" color="primary" type="submit">Done</Button>
                </form>
            </div>
        </Container>
    )
}
