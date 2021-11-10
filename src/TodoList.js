import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
function TodoList(props) {

    const [initTodo, getTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodo = [todo, ...initTodo]
        getTodos(newTodo)
    }

    const completeTodo = id => {
        initTodo.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
    }

    const removeTodo = id => {
        const filterArr = [...initTodo].filter(todo => todo.id !== id);
        getTodos(filterArr)
    }


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        getTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo
                initTodo={initTodo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;