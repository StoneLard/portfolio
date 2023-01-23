import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilters } from '../../../utils/filters';
import { changeFilter } from '../../../features/todolistSlice';


const TodoFilters = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.todos.filter)

    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const className = value === filter ? 'selected' : ''

        return (
          <li key={value}>
            <button className={className} onClick={ () => dispatch(changeFilter(value)) }>
              {key}
            </button>
          </li>
        )
    })

    return (
        <ul className="todo--filters">
            { renderedFilters }
        </ul>
    );
};

export default TodoFilters;