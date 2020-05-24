import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from './redux';
import { v4 as uuidv4 } from 'uuid';

export const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const [noTodo, setNoTodo] = useState(false);
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      setNoTodo(true);
    } else {
      setNoTodo(false);
    }

    addTodo({
      id: uuidv4(),
      name: todo,
      complete: false,
    });
    setTodo('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='form'>
        <input
          type='text'
          placeholder='enter todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </div>
      {noTodo ? <p style={{ color: 'red' }}>Enter todo</p> : null}
    </form>
  );
};
