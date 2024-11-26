import React from 'react';
import { Inputs } from './inputs/Inputs';
import Labels from './texts/Labels';


const Forms = ({ type }) => {
    switch (type) {
        case "create":
            return (
                <>
                    <div className='card-header text-center'>
                        <Labels tag="label" text="Formulario Tareas" />
                    </div>

                    <div className='card-body'>
                        <form className='d-flex flex-column align-items-center'>
                            <Inputs tag="input" placeholder="Título de la tarea" /><br />

                            <Inputs tag="textArea" placeholder="Descripción de la tarea" /><br />

                            <Inputs tag="button" value="Agregar Tarea"/>
                        </form>
                    </div>
                </>
            )

        case "update":
            return (
                <>
                    <div className='card-header text-center'>
                        <Labels tag="label" text="Formulario Tareas" />
                    </div>

                    <div className='card-body'>
                    <form className='d-flex flex-column align-items-center'>
                        <Inputs tag="input" placeholder="ID de la tarea a editar" /><br />

                        <Inputs tag="input" placeholder="Título de la tarea" /><br />

                        <Inputs tag="textArea" placeholder="Descripción de la tarea" /><br />


                        <Inputs tag="button" value="Modificar Tarea" />
                    </form>

                    </div>
                </>
            )

        default:
            return (
                <div>
                    <h3>No hay elemento Input</h3>
                </div>
            )
    }
}

export default Forms;