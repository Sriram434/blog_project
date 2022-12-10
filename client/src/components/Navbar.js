import React, { useState } from "react";
import { BlogForm } from "../BlogForm";

export const Navbar = (props) => {
    const [modal, setModal] = useState(false)
    const clickHandler = () => {
        setModal(true)
    }
    return (
        <>
            <div className="nav">
                <h2>Welcome to the blogs</h2>
                <button onClick={clickHandler}>ADD NEW BLOGS</button>
            </div>
            {modal && <BlogForm {...props} setModal={setModal} />}
        </>

    )
}