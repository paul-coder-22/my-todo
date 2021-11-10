import React, { useState } from 'react';

function TodoForm(props) {

    const [initInput, getInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: initInput
        })
        console.log(initInput)
        getInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Please Type Your Name"
                    type="text"
                    value={initInput}
                    onChange={(e) => getInput(e.target.value)}
                />
                <button onClick={handleSubmit}>Update</button>
            </form>
        </div>
    );
}

export default TodoForm;