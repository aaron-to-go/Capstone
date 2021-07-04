import axios from 'axios';
import React, {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useHistory} from "react-router-dom";


export default function AddCardPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const {token} = useContext(AuthContext);
    const history = useHistory()

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
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input type = "text" name = "title" value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
            Description:
            <input type= "text" name= "description" value={description} onChange={e => setDescription(e.target.value)}/>
        </label>
        <label>
            Department:
            <select name="selectList" id="selectList" value={department} onChange={e => setDepartment(e.target.value.toUpperCase())}>
                <option value="--">--</option>
                <option value="SALES">Sales</option>
                <option value="HR">HR</option>
            </select>
        </label>
        <button type="submit">Done</button>
    </form>
    )
}