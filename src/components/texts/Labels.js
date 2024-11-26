import React from "react";

const Labels = ({tag, text}) => {
    switch(tag){
        case "label":
            return <label>{text}</label>;
        case "h2":
            return <h2>{text}</h2>
        case "p":
            return <p>{text}</p>
        default:
            return(
                <div>
                    <h3>No hay elemento label</h3>
                </div>
            )
    }
}

export default Labels;