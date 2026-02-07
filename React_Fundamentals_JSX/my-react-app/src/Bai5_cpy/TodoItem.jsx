import React from "react";

function TodoItem({todo, deleteTodo}){
    return(
        <div>
            {todo.text}
            <button className="btn" onClick={(e) =>{
                deleteTodo(todo.id)
            }}>x</button>
        </div>
    )
}
export default TodoItem