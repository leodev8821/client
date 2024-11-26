import React from "react";

const EraseButton = ({ id }) => {
    return <input name="delete" id={id} type="button" value="Borrar tarea" className="btn btn-info mx-auto" />
}

export default EraseButton