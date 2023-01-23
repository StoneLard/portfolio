import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAll } from '../../../features/todolistSlice';

const TodoToggle = () => {
    const dispatch = useDispatch()
    const [completeToggle, setCompleteToggle] = useState(false)

    function toggle() {
        if(completeToggle) {
            dispatch(toggleAll(false))
            setCompleteToggle(false)
        } else {
            dispatch(toggleAll(true))
            setCompleteToggle(true)
        }
    }

    return (
        <div className="todo--input">
            <input
                id="toggle--all"
                className="toggle--all"
                type="checkbox"
                onChange={ toggle }
            />
            <label htmlFor="toggle--all">Mark all as complete</label>
        </div>
    );
};

export default TodoToggle;