import React from 'react';
import { Link } from 'react-router-dom';
import TodoBody from './TodoBody';
import TodoBottom from './TodoBottom';
import TodoHeader from './TodoHeader';


const Todos = () => {
    return (
        <div className="todo--app--container">
            <section className="todo--app">
                <TodoHeader/>
                <TodoBody/>
                <TodoBottom/>
            </section>
            <div className="back--button">
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default Todos;