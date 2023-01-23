import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodos } from '../../../features/todolistSlice';
import Todo from './Todo';

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todoarr)
    const filter = useSelector(state => state.todos.filter)

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || []
        dispatch(changeTodos(storedTodos))
    }, [])
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function selectFilteredTodos(filter) {
        switch(filter) {
            case 'all':
                return todos
            case 'active':
                return todos.filter(todo => !todo.completed)
            case 'completed':
                return todos.filter(todo => todo.completed)
        }
    }

    const filteredTodos = selectFilteredTodos(filter)

    return (
        <div>
            { todos.length
                ?   <ul className="todo--list">
                        {filteredTodos.map((todo) => 
                            <Todo id={ todo.id } key={todo.id}/>
                        )}
                    </ul>
                :   <h3 className="list--is--empty">LIST IS EMPTY</h3>}
        </div>
    );
};

export default TodoList;