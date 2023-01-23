import React from 'react';
import { useSelector } from 'react-redux';


const TodoCount = () => {
    const todos = useSelector(state => state.todos.todoarr)

    const todosRemaining = todos.filter(
      (todo) => !todo.completed
    ).length
    

    return (
        <span className="todo--count">
            <strong></strong>
            <span>{ todosRemaining } {todosRemaining > 1 || todosRemaining === 0 ? "items" : "item"} left</span>
        </span>
    );
};

export default TodoCount;