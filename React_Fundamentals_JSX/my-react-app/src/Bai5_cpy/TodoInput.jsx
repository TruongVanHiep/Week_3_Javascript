import React, { useState } from "react";

function TodoInput({addTodo}){
    const [input, SetInput] = useState("");
    // const handleInput = (e) =>{
    //     addTodo(input);
    //     SetInput("");
    // }
    return(
        <div>
            <input type="text" value={input} onChange={(e) => SetInput(e.target.value)} placeholder="Nhap..."/>
            <button className="btn" onClick={(e) => {
                addTodo(input);
                SetInput("")
                }}>Add</button>
        </div>
    )
}
export default TodoItem