import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo}){
    return(
        <ul>
            {
                todos.map(todo => (
                    <TodoItem todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}/>
                ))
            }
        </ul>
    )
}
export default TodoList