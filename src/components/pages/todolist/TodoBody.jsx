import React from 'react';
import TodoToggle from './TodoToggle';
import TodoList from './TodoList';

const TodoBody = () => {
    return (
        <section className="todo--main">
            <TodoToggle/>
            <TodoList/>
        </section>
    );
};

export default TodoBody;