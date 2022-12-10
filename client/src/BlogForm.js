import React, { useState } from "react"
import axios from "axios"

export const BlogForm = (props) => {
    const [title, setTitle] = useState()
    const [text, setText] = useState()

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const values = { title, text }
            const res = await axios.post('http://localhost:8083/newblog', values);
            if (res.status === 201){ 
                props.apiCall()
                props.setModal(false)
                alert("Succesfully added the data")
            }
        } catch (err) {
            alert(err.response.data)
        }
    }

    const changeHandler = (e) => {
        if (e.target.name === 'title') setTitle(e.target.value)
        if (e.target.name === 'text') setText(e.target.value)
    }

    const editFormhandler = async (e) => {
        e.preventDefault();
        try {
            const values = { title, text }
            const res = await axios.patch(`http://localhost:8083/newblog/${props.editValue._id}`, values);
            props.setModal(false)
            if (res.status === 201) {
                props.apiCall()
            }
        } catch (err) {
            alert(err.response.data)
            console.log("****ERR****", err.response.data)
        }
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="titleCloseBtn" onClick={() => props.setModal(false) }>X</button>
                <div className="title">
                    { props.editForm ? <h2>UPDATE THE BLOG</h2> : <h2>ADD TO BLOG LIST</h2> } 
                </div>
                <div className="body">
                    <label>
                        TITLE
                    </label>
                    <input type="text" defaultValue={props.editValue ? props.editValue.title : ""} onChange={changeHandler} name="title" />

                    <label>
                        TEXT
                    </label>
                    <input type="text" defaultValue={props.editValue ? props.editValue.text : ""} onChange={changeHandler} name="text" />

                </div>
                <div className="footer">
                    <button onClick={props.editForm ? editFormhandler : submitHandler}>SUBMIT</button>
                </div>

            </div>

        </div>
    )
}