import React, { use, useState } from "react";

function TodoInput({addTodo}){
    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        addTodo(input);
        setInput("");
    }

    return(
        <div>
            <input type="text" value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Nhập công việc..."/>
            <button className="btn" onClick={handleSubmit}>Add </button>
        </div>
    )
}
export default TodoInput;