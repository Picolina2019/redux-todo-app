import React from 'react';
import './App.css';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';



function App() {
 
  return (
   <div className='App'>
        <h2>Do your todos</h2>
        <TodoInput />
        <TodoList />
      </div>
    
  );
}

export default App;
