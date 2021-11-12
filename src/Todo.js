import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import TodoForm from './TodoForm';

function Todo({ initTodo, completeTodo, removeTodo, updateTodo }) {

    const [initEdit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdat = value => {
        updateTodo(initEdit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (initEdit.id) {
        return <TodoForm initEdit={initEdit} onSubmit={submitUpdat} />
    }

    let iconStyle = {
        iconSize: {
            fontSize: "1.5rem"
        }
    }

    return initTodo.map((todo, index) => (

        <div key={index} style={{ fontSize: "1rem" }}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text} demo
            </div>
            <div className='icons'>
                <Icon.FileMinus style={iconStyle.iconSize}
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <Icon.FilePlus style={iconStyle.iconSize}
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div >
    ));
}

export default Todo;