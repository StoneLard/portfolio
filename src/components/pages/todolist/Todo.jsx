import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleCompleted } from '../../../features/todolistSlice';

const selectTodoById = (state, todoId) => {
    return state.todos.todoarr.find((todo) => todo.id === todoId)
}

const Todo = ({ id }) => {
    const dispatch = useDispatch()    
    const todo = useSelector(state => selectTodoById(state, id))

    return (
        <li
            className={todo.completed ? "todo completed" : "todo"}>
            <div className="todo--show">
                <input
                    type="checkbox"
                    className="todo--completed--tgl"
                    onChange={ () => dispatch(toggleCompleted(id)) }
                    checked={ todo.completed }
                />
                <label>{ todo.text }</label>
                <button
                    className="todo--remove"
                    onClick={ () => dispatch(removeTodo(todo))}
                ></button>
            </div>
        </li>
    );
};

export default Todo;