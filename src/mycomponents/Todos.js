import React from 'react'
import { TodoItem} from "./TodoItem";

export const Todos = (props) => {
let myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
    borderStyle: "inset",
    textAlign: "left",
    backgroundColor: "lightgreen",
    padding: "20px"

}
let Header={
    padding: "40px",
    textAlign: "center",
    background: "DodgerBlue",
    color: "white",
    

}



    return (
        <>
     
        <h3 className="my-8" style={Header}>My Planned Tasks</h3>
           
         
        <div ClassName="container align-center" style={myStyle}>
           
            {props.todos.length===0? "No Tasks remaining! ": 
 
            props.todos.map((todo)=>{
                 return (
                     <>
                 <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr/>
                 </>
                 )
                })
            }
       
        
        </div>
        </>
    )
}

