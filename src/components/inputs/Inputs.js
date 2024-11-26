import React from "react";
import { useState } from 'react';
import Forms from "../Forms";

export const Inputs = ({ tag, value, placeholder }) => {
    switch (tag) {
        case "input":
            return <input type="text" placeholder={placeholder} className="form-control"/>

        case "button":
            return  <input type="submit" value={value} className="btn btn-info mx-auto"/>

        case "textArea":
            return <textarea placeholder={placeholder} className="form-control"></textarea>

        default:
            return (
                <div>
                    <h3>No hay elemento Input</h3>
                </div>
            )
    }
}