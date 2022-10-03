import './App.module.css';
import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {Todolist} from "./components/TodoList";


const defaultTodos = [{text: 'Cortar cebolla', completed: false}, {
    text: 'Tomar el curso de intro a React', completed: false
}, {text: 'Llorar con la llorona', completed: false}];

const App = () => {
    return (<div className={'container'}>
        <h1>TODOs App</h1>
        <TodoCounter/>
        <TodoSearch/>
        <Todolist>
            {defaultTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
        </Todolist>

        <CreateTodoButton/>
    </div>);
}

export default App;

