import React from "react";

function ToDoForm({addTodo}){
    const [value,setValue]=React.useState("")
   
    const handleSubmit = e =>{
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="label">Your task here</label>
            <input
            type="text"
            className="input"
            value={value}
            onChange={e =>setValue(e.target.value)}
            />
        </form>
    )
  }

  export default ToDoForm