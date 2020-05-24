import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO= 'ADD_TODO';
export const REMOVE_TODO= 'REMOVE_TODO';
export const TOGGLE_TODO= 'TOGGLE_TODO'

const initialState={
    todos:[
      {
          id:uuidv4(),
          name:'Do laundry',
          complete:false

      },
    {
        id:uuidv4(),
        name:'Do homework',
        complete:true
    }
    ]
};

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }
        case 'TOGGLE_TODO':
            return{
                ...state,
                todos:state.todos.map(todo=>(todo.id===action.payload)? {...todo, complete:!todo.complete}: todo)
            }
        case 'REMOVE_TODO':
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload)
            }
            default:
                return state
            }
    }
export const addTodoAction=(todo)=>({
    type:'ADD_TODO',
    payload:todo
});

export const toggleTodoAction=(todoId)=>({
    type:'TOGGLE_TODO',
    payload:todoId
});
 export const deleteTodoAction=(todoId)=>({
    type:'REMOVE_TODO',
    payload:todoId
 })
