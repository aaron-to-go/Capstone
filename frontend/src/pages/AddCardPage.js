import axios from 'axios';
import React, { useState } from "react";


export default function AddCardPage(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (event => {
        event.preventDefault();
        axios
            .post(`/api/cards`, {
                "title": title,
                "description": description,
                "department":department,
                "user_id":"dummy_frontend_id"})
            .then()
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
                <option value="SALES">Sales</option>
                <option value="HR">HR</option>
            </select>
        </label>
        <button type="submit">Done</button>
    </form>
    )
}