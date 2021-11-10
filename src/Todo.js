import React, { useState } from 'react';
import TodoForm from './TodoForm';
import * as Icon from 'react-bootstrap-icons';

function Todo({ initTodo, completeTodo, removeTodo }) {

    const [initEdit, setEdit] = useState({
        id: null,
        value: ''
    })

    if (initEdit.id) {
        return <TodoForm initEdit={initEdit} onSubmit={} />
    }
    return initTodo.map((todo, index) => (

        <div key={index} style={{ fontSize: "1rem" }}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <Icon.FileMinus
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <Icon.FilePlus
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div >
    ));
}

export default Todo;