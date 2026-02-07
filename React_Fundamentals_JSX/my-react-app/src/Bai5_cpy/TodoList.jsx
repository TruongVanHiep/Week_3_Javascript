import React from "react";

function TodoItem({todos, deleteTodo}){
    return(
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
                ))
            }
        </ul>
    )
}
export default TodoItem