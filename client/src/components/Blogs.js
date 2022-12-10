import React, { useState } from "react";
import axios from "axios";
import { BlogForm } from "../BlogForm";

export const Blogs = (props) => {
    const [modal, setModal] = useState(false)
    const [editValue, setEditValue] = useState()


    const deleteHandler = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8083/newblog/${id}`)
            if (res.status === 201) props.apiCall()
        } catch (err) {
            alert(err.response.data)
            console.log("****ERR****", err.response.data)
        }
    }

    const editHandler = async (id) => {
        setModal(true)
        try {
            const res = await axios.get(`http://localhost:8083/newblog/${id}`)
            if (res.status === 201) {
                props.apiCall()
                setEditValue(res.data)
            }
        } catch (err) {
            alert(err.response.data)
            console.log("****ERR****", err.response.data)
        }
    }

    const blogsList = props?.data?.map(val => {
        return (
            <div className="blogContainer">
                <h3>{val.title}</h3>
                <p>{val.text}</p>
                <button className="delete" onClick={() => deleteHandler(val._id)}>DELETE BLOG</button>
                <button className="edit" onClick={() => editHandler(val._id)}>UPDATE BLOG</button>
                <hr />
            </div>
        )
    })



    return (
        <>
            {modal &&
                <BlogForm
                    {...props}
                    setModal={setModal}
                    editValue={editValue}
                    editForm={true}
                />
            }
            {blogsList}
        </>
    )
}