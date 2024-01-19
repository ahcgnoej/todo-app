import React from 'react';
import TodoListItem from './TodoListItem';
import '../TodoList.scss';

const TodoList = (props) => {
    const { todo, onRemove ,onToggle} = props;

    return (
        <div className='TodoList'>
            {todo.map(todoItem => (
                <TodoListItem
                    key={todoItem.id}
                    todo={todoItem}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;
