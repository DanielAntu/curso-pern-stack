import React, { Fragment, useState } from "react";

const EditTodo = ( {todo} ) => {
    const [description, setDescription] = useState(todo.description)

    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            window.location = '/'
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Editar
            </button>

            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Editar afazer</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>
                                X
                            </button>
                        </div>

                        <div className="modal-body">
                            <input 
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDescription(e)}>
                                Editar
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo