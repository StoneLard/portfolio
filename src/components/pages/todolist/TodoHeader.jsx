import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../features/todolistSlice';

const TodoHeader = () => {
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch()

    function handleEnter(event) {
        if (event.key === 'Enter') {
            if(newTodo.trim().length) {
                dispatch(addTodo({text: newTodo , id: Date.now(), completed: false}))
                setNewTodo('')
            }
        }
    }

    return (
        <header className="todo--header">
            <h2 className="todo--heading">todos</h2>
                <input
                    className="new--todo"
                    placeholder="What needs to be done?"
                    value={ newTodo }
                    onChange={e => setNewTodo(e.target.value)}
                    onKeyDown={ handleEnter }
                    autoFocus
                />
        </header>
    );
};

export default TodoHeader;