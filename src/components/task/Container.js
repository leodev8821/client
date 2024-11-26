import React from "react";
import Paraph from "./Paraph";
import EraseButton from "./Button";

const Container = ({ id, title, taskText }) => {
    return (
        <div name={id} className="card d-flex justify-content-center bg-body-secondary w-25 mx-3 my-3">
            <div className="card-header card-header text-center">
                <Paraph title="ID: " text={id} />
            </div>
            <div className="card-body d-flex flex-column align-items-center">
                <Paraph title="Title: " text={title}/>
                <Paraph title="Description: " text={taskText}/>
            </div>
            <hr className="p-0 m-0"></hr>
            <div className="d-flex flex-column align-items-center justify-content-center m-3">
            <EraseButton id={id}/>
            </div>
        </div>
    )
}

export default Container