import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../../features/todolistSlice';
import TodoCount from './TodoCount';
import TodoFilters from './TodoFilters';

const TodoBottom = () => {
    const dispatch = useDispatch()

    return (
        <section className="todo--bottom">
            <TodoCount/>
            <TodoFilters/>
            <button
                className="clear--completed"
                onClick={() => dispatch(clearCompleted())}
            >
                Clear completed
            </button>
        </section>
    );
};

export default TodoBottom;